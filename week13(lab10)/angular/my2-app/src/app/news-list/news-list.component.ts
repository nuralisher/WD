import { Component, OnInit } from '@angular/core';

import { newsList, Vacancy, Company } from '../news'
import { NewsService } from '../news.service'
import {FrontService} from '../front.service'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  // listNews = newsList;
  companies:Company[] = [];

  constructor(private front:FrontService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.front.getCompanies().subscribe(companies=>{this.companies = companies});
  }
  
  // Add(){
  //   this.newsService.addNews();
  // }

  // getNews():void{
  //   this.newsService.getNews().subscribe(news=>this.listNews = news);
  // }

  // delete(id):void{
  //   this.newsService.deleteNews(id);
  // }
}
