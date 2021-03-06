import { Injectable } from '@angular/core';
import {Profile} from './profile';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private backendUrl = 'http://localhost:3000/hw3';


  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getExchanges(): Observable<any> {
    console.log('making request in service');
    return this.http.get<any>(this.backendUrl);
  }

}
