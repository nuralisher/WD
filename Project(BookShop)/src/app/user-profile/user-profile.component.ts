import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserProfile, Book } from '../localdb';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile:UserProfile;
  books:Book[];

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.data.getUser().subscribe(result=>{
      this.profile = result;
      this.books = result.books;
    })
  }

  deleteBook(id){
    this.data.deleteFromProfile(id).subscribe(result=>{
      this.getProfile();
    })
  }

  save(){
    let newProfile = {
      user_id:this.profile.user.id, 
      id:this.profile.id,
      name:this.profile.name,
      user:this.profile.user,
    };
    this.data.updateUserProfile(newProfile).subscribe(result=>{
      this.profile = result;
    })
  }

}
