import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { newsList } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news = newsList;
  id=2;
  constructor() { }

  addNews(){
    this.news.push({
      id:++this.id,
      title:'New News'+this.id,
      description:'description goi'
    })
  }

  deleteNews(id){
    this.news = this.news.filter(newsPage => newsPage.id!==id);
  }

  getNewsPageById(id):Observable<any>{
    const needednews = this.news.find(newsPage => newsPage.id === id);
    return of(needednews);
  }

 change(id , newTitle){
    this.news.find(newsPage=>newsPage.id ===id).title = newTitle;
 }

  getNews():Observable<any>{
    return of(this.news);
  }
}
