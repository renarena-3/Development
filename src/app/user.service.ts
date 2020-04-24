  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {                    

  private baseUrl = 'http://localhost:2020';

  constructor(private http: HttpClient) { }

  createUser(formdata: Object): Observable<Object> {
    
    return this.http.post(`${this.baseUrl}`+'/index/signup', formdata);
  
  }

  getSlaParams():Observable<any>{

   return this.http.get(`${this.baseUrl}`+'/util/getParamValues').pipe(
    // catchError( err => {
    //      if (err.status === 401) {
    //          return EMPTY;
    //      } else {
    //          return throwError(err.message );
    //      }
    // })
);
  }

  


}