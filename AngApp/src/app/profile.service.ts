import {Injectable} from '@angular/core';
import {Profile} from './profile';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // this is the server link
  private profilesUrl = 'http://localhost:3000/users';

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    this.messageService.add('Testing Messages');
    return this.http.get<Profile[]>(this.profilesUrl)
      .pipe(
        tap(_ => this.log('fetched profiles')),
        catchError(this.handleError<Profile[]>('getProfiles', []))
      );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getProfile(id: number): Observable<Profile> {
    const url = `${this.profilesUrl}/${id}`;
    return this.http.get<Profile>(url).pipe(
      tap(_ => this.log(`fetched profile id=${id}`)),
      catchError(this.handleError<Profile>(`getProfile id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateProfile(profile: Profile): Observable<any> {
    return this.http.put(this.profilesUrl, profile, httpOptions).pipe(
      tap(_ => this.log(`updated profile id=${profile.id}`)),
      catchError(this.handleError<any>('updateProfile'))
    );
  }


  /** POST: add a new hero to the server */
  addProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.profilesUrl, profile, httpOptions).pipe(
      tap((newProfile: Profile) => this.log(`added profile w/ id=${newProfile.id}`)),
      catchError(this.handleError<Profile>('addProfile'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteProfile(profile: Profile | number): Observable<Profile> {
    const id = typeof profile === 'number' ? profile : profile.id;
    const url = `${this.profilesUrl}/${id}`;

    return this.http.delete<Profile>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted profile id=${id}`)),
      catchError(this.handleError<Profile>('deleteProfile'))
    );
  }

  /* GET heroes whose name contains search term */
  searchProfiles(term: string): Observable<Profile[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Profile[]>(`${this.profilesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found profile matching "${term}"`)),
      catchError(this.handleError<Profile[]>('searchProfiles', []))
    );
  }

}
