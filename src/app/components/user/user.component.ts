import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { DataService } from '../../services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private _ac: ActivatedRoute, public _data: DataService, private _router: Router) { }
  
  ngOnInit() {
    this._data.users = this._ac.snapshot.data.user;
  
    this._router.events.subscribe( () => {
      if (this._router.url !== '/users') {
        this.mostrarMenu = true;
      } else {
        this.mostrarMenu = false;
      }
    });
  }


}
