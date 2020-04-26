import { Component, OnInit } from '@angular/core';
import { Author } from '../localdb';
import { DataService } from '../data.service';

@Component({
  selector: 'app-author-manager',
  templateUrl: './author-manager.component.html',
  styleUrls: ['./author-manager.component.css']
})
export class AuthorManagerComponent implements OnInit {
  authors:Author[];
  author:Author;
  newAuthor = {name:"New Author"};
  selected = true;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(){
    this.data.getAuthors().subscribe(res=>{
      this.authors = res;
      this.author = res[0];
    })
  }

  createAuthor(){
    this.data.createAuthor(this.newAuthor).subscribe(res=>{
      this.getAuthors();
    })
  }

  updateAuthor(){
    this.data.updateAuthor(this.author).subscribe(res=>{
      this.getAuthors();
    })
  }

  deleteAuthor(){
    this.data.deleteAuthor(this.author.id).subscribe(res=>{
      this.getAuthors();
    })
  }

  selectAuthor(author:Author){
    this.author = author;
    this.selected = true;
  }

  createNew(){
    this.selected = false;
  }

}
