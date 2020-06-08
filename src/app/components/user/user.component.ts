import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _ac: ActivatedRoute) { }

  usuarios: User[];

  ngOnInit() {
    this.usuarios = this._ac.snapshot.data.user;
  }



}
