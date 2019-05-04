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

export class LoginService {
  private backendUrl = 'http://localhost:3000/';

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getLoginInfo(): Observable<any> {
    return this.http.get<any>(this.backendUrl);
  }

}
