import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { DataService } from '../../../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public _data: DataService, private _snackBar: MatSnackBar) { }

  filterUsers: User[];
  search = new FormControl('');
  pageOptions: number[] = [3, 4 , 5];
  pageSize: number = 3;
  pageNumber: number = 1;
  noEncontrados: boolean = false;

  ngOnInit() {
    this.iniciarPage();
  }

  iniciarPage(): void {
    this.filterUsers = this._data.users;

    this.search.valueChanges.subscribe(val => {
      // Filtrado de usuarios por nombre - email - login.
      this.filterUsers = this._data.users.filter(
      user => user.name.includes(val)
      || user.username.includes(val)
      || user.email.includes(val)
      );

      if (this.filterUsers.length === 0) {
        this.noEncontrados = true;
      } else {
        this.noEncontrados = false;
      }
    });
  }

  eliminarUsuario(id: number) {

    this._data.users.splice(this._data.users.indexOf(this._data.users.find(user => user.id === id)), 1);
    this.filterUsers = this._data.users;
    this.pageNumber = this.pageNumber - 1;

    this._snackBar.open('Usuario eliminado', '', {
      duration: 10000,
      panelClass: ['notif-success']
    });
  }

  handlePage(e: PageEvent) {

    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;

   }


}
