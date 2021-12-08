import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../config/config.service';
import { CrosspostParentList } from '../../../config/data.model';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  lists: CrosspostParentList[] = [];

  dataLimited: CrosspostParentList[] = [];

  url = 'https://www.reddit.com/r/sweden.json';

  pageSize = 25;

  pageSizeOptions = [5, 10, 25];

  currentPage = 0;

  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: this.pageSize,
    length: this.lists?.length,
    previousPageIndex: 0,
  };

  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {
    this.configService
      .getListOfGroup(this.url)
      .subscribe({
        next: data => {
          this.lists = data;
        },
        error: (error) => {
          console.log(error);
        }
    });

    this.getServerData(this.pageEvent);
  }

  getServerData(event:PageEvent): PageEvent {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    this.configService
      .getListLimited(this.url, start, end)
      .subscribe({
        next: data => {
          this.dataLimited = data;
        },
        error: (error) => {
          console.log(error);
        }
      });
    return event;
  }

  navigateByUrl(id: string): void {
    const url = `/list/article/${id}`;
    this.router.navigate([url]);
  }
}
