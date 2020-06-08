import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  rootUrl: string = "https://jsonplaceholder.typicode.com/";

  constructor(private _http: HttpClient) { }


  getAllUser(): Observable<any> {
    return this._http.get(this.rootUrl + 'users');
  }
}
