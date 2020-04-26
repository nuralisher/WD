import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'
import { User } from './localdb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  user:User;
  
  logged = false;

  username = '';
  password = '';

  constructor(private data: DataService) {}


  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if(token){
      this.logged = true;
      this.getUser();
    }
  }

  getUser(){
    this.data.getUser().subscribe(result=>{
      this.user=result.user
    });
  }

  login(){
    this.data.login(this.username, this.password).subscribe(response=>{
      localStorage.setItem('token', response.token);
      this.logged = true;
      this.username = '';
      this.password = '';
      this.getUser();
    })
  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }

  title = 'my-app4';
}
