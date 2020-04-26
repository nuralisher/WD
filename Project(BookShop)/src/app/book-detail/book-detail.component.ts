import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Book, Category, Author } from '../localdb';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book:Book;
  categories:Category[];
  authors:Author[];
  isAdded = false;

  constructor(
    private data:DataService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getBook();
    this.getCategories();
    this.getAuthors();
    this.check();
  }

  getBook(){
    let id = +this.route.snapshot.paramMap.get('id');
    this.data.getBook(id).subscribe(result => this.book = result);
  }

  getCategories(){
    this.data.getCategoryList().subscribe(result => this.categories = result);
  }

  getAuthors(){
    this.data.getAuthors().subscribe(result=>this.authors=result);
  }

  save(){
    this.data.updateBook(this.book).subscribe(()=>alert('Updated'));
  }

  addMe(){
    this.data.addToProfile(this.book.id).subscribe(result=>{
    });
    this.isAdded = true;
  }

  removeMe(){
    this.data.deleteFromProfile(this.book.id).subscribe(result=>{

    })
    this.isAdded = false;
  }

  check(){
    this.data.getUser().subscribe(result=> {
      let mybooks = result.books;
      for(let mybook of mybooks){
        if(this.book.id===mybook.id){
          this.isAdded = true;
          return;
        }
      }
      this.isAdded = false;
    })
  }
}
