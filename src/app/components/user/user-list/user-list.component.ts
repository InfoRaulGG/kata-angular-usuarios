import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  @Input() users: User[];
  allUsers: User[];
  search = new FormControl('');
  pageOptions: number[] = [3, 4 , 5];
  pageSize: number = 3;
  pageNumber: number = 1;
  noEncontrados: boolean = false;

  ngOnInit() {
    this.allUsers = this.users;

    this.search.valueChanges.subscribe(val => {
      this.users = this.allUsers.filter(
      user => user.name.includes(val) 
      || user.username.includes(val)
      || user.email.includes(val)
      );

      if (this.users.length === 0) {
        this.noEncontrados = true;
      } else {
        this.noEncontrados = false;
      }
    });
  }


  handlePage(e: PageEvent) {

    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;

   }


}
