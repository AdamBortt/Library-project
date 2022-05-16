import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IBoook } from '../Interfaces/IBook';

@Injectable({
  providedIn: 'root'
})
export class libraryService {
  private eventsPath = 'library';

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<IBoook[]>(environment.apiUrl+this.eventsPath);
  }
}