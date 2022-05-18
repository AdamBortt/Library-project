import { Component, OnInit } from '@angular/core';
// import { libraryService } from './Services/libraryservice';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './Components/modal/modal.component';
import Swal from 'sweetalert2'
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

  constructor(private modalService: NgbModal) { }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent)
  }

  deleteBook(id: any) {
    Swal.fire({
      title: 'Do you want to delete this book?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Book has been deleted',
          timer: 2000,
          showConfirmButton: false
      })
      axios.delete(`http://localhost:1337/api/books/${id}`)
      setTimeout(function(){
        window.location.reload()
      }, 2000)
      }
    })
  }

  changeStatusBook(id: any, status: boolean) {
    if (status == true){
      axios.put(`http://localhost:1337/api/books/${id}`, {
        data: {
          borrowed: false
        }
      })
    }
    else {
      axios.put(`http://localhost:1337/api/books/${id}`, {
        data: {
          borrowed: true
        }
      })
    }
    Swal.fire({
      icon: 'success',
      title: "The book's status has changed",
      timer: 1500,
      showConfirmButton: false
  })
  setTimeout(function(){
    window.location.reload()
  }, 1600)
  }
}
