import { Component, OnInit } from '@angular/core';
// import { libraryService } from './Services/libraryservice';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  results: any = [];
  books: any = []

  async ngOnInit() {
    await axios.get("http://localhost:1337/api/books").then(res => this.results = res.data);
    this.books = Object.values(this.results.data)
    console.log(this.books)
  }
  constructor() { }
}
