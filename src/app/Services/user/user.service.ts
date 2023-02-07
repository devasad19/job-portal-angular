import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, retry, catchError } from 'rxjs/operators';
import { JobCategory } from './../../Models/jobCategory/job-category'
import { User } from './../../Models/user/user.model'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private rootUrl = 'http://localhost:5001/api/jobs-category';
  private httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       // 'Access-Control-Allow-Origin': '*',
       // 'Access-Control-Allow-Credentials': 'true',
       // 'Access-Control-Allow-Headers': 'Content-Type',
       // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
   })
  }

  constructor(private httpClient: HttpClient) { }

  getJobCategories(): Observable<JobCategory[]> {
      return this.httpClient.get<JobCategory[]>(this.rootUrl, this.httpOptions)
      // .pipe(tap(data => console.log("Anlagenstatus Daten:", data.response)),
        // catchError(this.httpErrorHandler))
      .pipe(retry(3), catchError(this.httpErrorHandler))
  }
 
  storeEmpRegister(userData: User): Observable<User> {
      return this.httpClient.post<User>(this.rootUrl, userData, this.httpOptions)
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
