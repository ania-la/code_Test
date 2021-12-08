import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, EMPTY, debounceTime } from 'rxjs';
import { CrosspostParentList } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) {}

  getListOfGroup(url: string): Observable<CrosspostParentList[]> {
    return this.http.get(url).pipe(
      map(data => {
        const datalist = Object.values(data)[1].children;
        let articles = [];
        for (let i of datalist) {
          articles.push(i.data);
        }
        return articles;
      }),
      debounceTime(1000),
      catchError((error: HttpErrorResponse) => {
        return EMPTY;
      })
    );
  }

  getListLimited(url: string, start: number, end: number): Observable<CrosspostParentList[]> {
    return this.http.get(url).pipe(
      map(data => {
        const datalist = Object.values(data)[1].children;
        let articles = [];
        for (let i of datalist) {
          articles.push(i.data);
        }
        return articles.slice(start, end);
      }),
      debounceTime(1000),
      catchError((error: HttpErrorResponse) => {
        return EMPTY;
      })
    );
  }

  getArticle(url: string, articleId: string): Observable<CrosspostParentList> {
    return this.http.get(url).pipe(
      map(data => {
        const datalist = Object.values(data)[1].children;
        let articles = [];
        for (let i of datalist) {
          articles.push(i.data);
        }
        return articles.find(article => article.id === articleId);
      }),
      debounceTime(1000),
      catchError((error: HttpErrorResponse) => {
        return EMPTY;
      })
    );
  }

}
