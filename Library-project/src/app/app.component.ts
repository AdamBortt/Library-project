import { Component } from '@angular/core';
import { libraryService } from './Services/libraryservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events$ = this.eventService.getEvents();
  constructor(private eventService: libraryService) { }
}
