import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Company, Vacancy, CompanyVacancies, LoginResponse} from "./news";

@Injectable({
  providedIn: 'root'
})
export class FrontService {
  BASE_URL = 'http://localhost:8000';


  constructor(private http: HttpClient) { }

  getCompanies():Observable<Company[]>{
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies/`);
}

// getCompanyVacancies(pk):Observable<CompanyVacancies>{
//   console.log('pk: '+pk);
//   let res:Observable<CompanyVacancies>= this.http.get<CompanyVacancies>(`${this.BASE_URL}/api/companies/${pk}/vacancies`);
//   let o = res.subscribe(r=>o=r);
  
//   console.log("serverVACs: " + o.vacs);
//   console.log("serverOb: " + o.vacancies);
//   return res;
// }

getVacancies():Observable<Vacancy[]>{
  return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies`);
}

getCompany(id): Observable<Company> {
  console.log('id:' + id)
  return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}`);
}

login(username, password): Observable<LoginResponse> {
  return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login`, {
    username,
    password
  })
}

}
