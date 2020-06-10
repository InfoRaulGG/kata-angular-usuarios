import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { notRepeatUsername } from 'src/app/validators/repeat-username.directive';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  editForm: FormGroup;
  selectUser: User;

  constructor(private fb: FormBuilder, private _api : ApiServiceService,
    private _snackBar: MatSnackBar, private _data: DataService, private _ac: ActivatedRoute) { }

  ngOnInit() {
    this.inicializarForm();
  }
  inicializarForm() {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', { validators: [Validators.required, notRepeatUsername(this._data.users)], updateOn: 'blur' }],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{5}')])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{9}')])],
      website: ['', Validators.required],
    });
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
