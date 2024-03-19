import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articles:Article[];
  constructor(){
    this.articles=[
      new Article('Angular', 'http://angular.io', 4),
      new Article('Fullstack', 'http://fullstack.io', 8),
      new Article('Angular HomePage', 'http://angular.io', 6)
    ]
  }



  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
    console.log(`Adding new article : ${title.value} and link : ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    title.value='';
    link.value='';
    return false;
  }


  sortedArticles():Article[]{
    return this.articles.sort((a:Article, b:Article)=>b.votes-a.votes);
  }
}