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

  constructor(private _http: HttpClient) { }


  /* Usuarios */
  getAllUser(): Observable<User[]> {
    return this._http.get<User[]>(this.rootUrl + 'users');
  }

  getUserById(id: number): Observable<User[]>  {
    return this._http.get<User[]>(this.rootUrl + 'users/' + id);
  }

  createUser(user: User): Observable<User> {
    const data = JSON.stringify(user);
    return this._http.post<User>(this.rootUrl + 'users', { data }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  updateUser(user: User, id: number): Observable<User> {
    const data = JSON.stringify(user);
    return this._http.patch<User>(this.rootUrl + 'users/' + id, { data } , {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  getTodosOfUser(id: number): Observable<Todo> {
    return this._http.get<Todo>(this.rootUrl + 'todos?userId=' + id);
  }

}
