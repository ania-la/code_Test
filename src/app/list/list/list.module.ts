import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './article/article.component';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [
    ListComponent,
    ArticleComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatPaginatorModule,
    RouterModule
  ]
})
export class ListModule { }
