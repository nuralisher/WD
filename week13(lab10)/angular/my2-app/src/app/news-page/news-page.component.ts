import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { NewsService } from '../news.service'
import {FrontService} from '../front.service'
import {Company, Vacancy , CompanyVacancies , Vacancy2} from '../news'

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  Allvacancies:Vacancy[]=[];
  ownVacancy:Vacancy[];
  companyv:CompanyVacancies;
  company:Company;

  constructor(private front:FrontService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllVacancies();
    this.getVacancies();
  }

  getVacancies(){
    this.getAllVacancies();
    const sid = +this.route.snapshot.paramMap.get('companyId');
    console.log('sid: '+ sid);
    console.log('sid: '+ this.Allvacancies.length);

    for(let i=0; i<this.Allvacancies.length; i++){
      let vacancy = this.Allvacancies[i];

      console.log('id: '+ vacancy.company_id);

      if(vacancy.company_id===sid){
        this.ownVacancy.push(vacancy);
      }
    }

  }

  getAllVacancies(){
    this.front.getVacancies().subscribe(res=>this.Allvacancies = res);
    console.log('ch'+this.getAllVacancies.length);
  }

  // delete(id){
  //   this.newsService.deleteNews(id);
  // }

  // change(){
  //   const id = +this.route.snapshot.paramMap.get('newsId');
  //   this.newsService.change(id, 'Changed Title');
  // }

  // getPageNews(){
  //   const id = +this.route.snapshot.paramMap.get('newsId');

  //   this.newsService.getNewsPageById(id).subscribe(news => this.pageNews=news);
  // }

}
