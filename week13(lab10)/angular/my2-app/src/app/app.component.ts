import { Component, OnInit } from '@angular/core';
import {FrontService} from './front.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  logged = false;

  username = '';
  password = '';
  title = 'my2-app';

  constructor(private front: FrontService) {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    
    if (token){
      this.logged = true;
    }
  }

  login(){
    this.front.login(this.username, this.password)
      .subscribe(res => {
        console.log('Token :' + res.token);

        localStorage.setItem('token', res.token);

        this.logged = true;

        this.username = '';
        this.password = '';
      })
  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }


}
