import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../../config/config.service';
import { CrosspostParentList } from '../../../config/data.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articleId: string = '';

  articles: CrosspostParentList[] = [];

  test: any[] = [];

  article: any;

  url = 'https://www.reddit.com/r/sweden.json';

  defaultText = 'not yet edited...';

  constructor(private activatedRoute: ActivatedRoute, private configService: ConfigService) {}

  ngOnInit(): void {
    ({id: this.articleId} = this.activatedRoute.snapshot.params);

    this.configService
      .getArticle(this.url, this.articleId)
      .subscribe({
        next: article => {
          this.article = article;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

}
