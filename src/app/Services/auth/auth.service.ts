import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { retry, tap, catchError } from 'rxjs/operators'
import { User } from './../../Models/user/user.model'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private rootUrl = "http://localhost:5001/api";
  private httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
   })
  }

  constructor(private httpClient: HttpClient) { }


  login(username: string, password: string): Observable<User>{
      return this.httpClient.post<User>(this.rootUrl+'/login', {username, password}, this.httpOptions)
      .pipe(retry(3), catchError(this.httpErrorHandler))
  }


   private httpErrorHandler (error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
         console.log("A client side error occurs. The error message is " + error.message);
      } else {
         console.log(
            "An error happened in server. The HTTP status code is "  + error.status + " and the error returned is " + error.message);
      }

      return throwError("Error occurred. Pleas try again");
   }

}
