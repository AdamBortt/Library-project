import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IBoook } from 'src/app/Interfaces/IBook';
import Swal from 'sweetalert2'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  AddBook: IBoook = ({
    title: "",
    author: "",
    borrowed: false
  })

  constructor(public activeModal: NgbActiveModal) { }

  addBook() {
    axios.post("http://localhost:1337/api/books", {
      data: {
        title: this.AddBook.title,
        author: this.AddBook.author,
        borrowed: this.AddBook.borrowed,
      },
    })
    this.activeModal.dismiss();
    Swal.fire({
      icon: 'success',
      title: 'the book has been added',
      showConfirmButton: false,
      timer: 2000
    })
    setTimeout(function(){
      window.location.reload()
    }, 2000)
  }
}
