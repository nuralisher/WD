import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsPageComponent } from './news-page/news-page.component';


const routes: Routes = [
  {path:'', redirectTo: '/companies', pathMatch: 'full'},
  {path :'companies' , component: NewsListComponent},
  {path : 'companies/:companyId' , component: NewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
