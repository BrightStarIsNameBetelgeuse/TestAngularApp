import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Test} from './Test';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class DataService {
  private dataUrl = 'api/data';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`Received new msg: ${message}`);
  }

  getData(): Observable<Test[]> {
    return this.http.get<Test[]>(this.dataUrl)
      .pipe(
        tap(_ => this.log('fetched data')),
        catchError(this.handleError('getData', []))
      );
  }

  getDataItem(id: number): Observable<Test> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.get<Test>(url).pipe(
      tap(_ => this.log(`fetched data by id = ${id}`)),
      catchError(this.handleError(`getData id ${id}`))
    );
  }

  updateData (data: Test): Observable<any> {
    return this.http.put(this.dataUrl, data, httpOptions).pipe(
      tap(),
      catchError(this.handleError<any>('updateData'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

