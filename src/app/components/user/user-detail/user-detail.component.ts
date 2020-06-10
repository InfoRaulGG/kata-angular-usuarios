import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../../services/api-service.service';
import { User } from '../../../models/User';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: number;
  selectUser: User;
  constructor(private _ac: ActivatedRoute, private _api: ApiServiceService, private _data: DataService) { }

  ngOnInit() {
    this.obtenerUsuario();
  }
  obtenerUsuario(): void {
    this._ac.params.subscribe(params => {
      if (params.id < 3) {
        this._api.getUserById(params.id).subscribe(response => {
          this.selectUser = response;
        }, error => {
          console.log(error);
        });
      } else {
        this.selectUser = this._data.users.find(user => user.id === parseInt(params.id));
      }
    });
  }
}
