import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  rootUrl = 'https://jsonplaceholder.typicode.com/';
  userUrl = '/users/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private _http: HttpClient) { }


  /* Usuarios */
  getAllUser(): Observable<User[]> {
    return this._http.get<User[]>(this.userUrl, {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getUserById(id: number): Observable<User>  {
    return this._http.get<User>(this.userUrl + id);
  }

  createUser(user: User): Observable<User> {
    const data = JSON.stringify(user);
    return this._http.post<User>(this.userUrl, { data }, {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateUser(user: User, id: number): Observable<User> {
    const data = JSON.stringify(user);
    return this._http.patch<User>(this.userUrl + id, { data } , {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }


}
