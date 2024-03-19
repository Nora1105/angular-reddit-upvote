import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  @HostBinding('attr.class') cssClass='row';
  // article:Article;

  @Input()
  article!: Article;

  constructor(){
    // this.article=new Article('Angular', 'https://angular.io', 10);
  }
  ngOnInit() {
  }

  voteUp():boolean{
    this.article.voteUp();
    return false
  }

  voteDown():boolean{
    this.article.voteDown();
    return false
  }
}