import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import { notRepeatUsername } from 'src/app/validators/repeat-username.directive';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  editForm: FormGroup;
  user = new User();
  loader: boolean = false;
  validateErrors: any[] = [];


  constructor(private fb: FormBuilder, private _api : ApiServiceService, private _router: Router,
    private _snackBar: MatSnackBar, private _data: DataService, private _ac: ActivatedRoute) { }


  ngOnInit() {
    this.inicializarForm();
    this.obtenerUsuario();
    this.subscribeFormChanges();
  }


  inicializarForm() {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{5}')])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{9}')])],
      website: ['', Validators.required],
      companyName: ['', Validators.required],
      catchPhrase: ['', Validators.required],
      bs: ['', Validators.required]
    });
  }

  obtenerUsuario(): void {
    this._ac.params.subscribe(params => {
      if (params.id < 3) {
        this._api.getUserById(params.id).subscribe(response => {
          this.user = response;
        }, error => {
          console.log(error);
        });
      } else {
        this.user = this._data.users.find(user => user.id === parseInt(params.id));
      }
    });
  }

  onSubmit() {
    this.loader = true;
    this._api.updateUser(this.user, this.user.id).subscribe(response => {
      this._snackBar.open('Usuario actualizado satisfactoriamente', '', {
        duration: 10000,
        panelClass: ['notif-success']
      });

      this._router.navigate(['/users/detail/' + this.user.id]);

      this.loader = false;

    }, error => {
      console.log(error);
      this._snackBar.open(error.message, '', {
        duration: 10000,
        panelClass: ['notif-bad']
      });

      this.loader = false;

    });
  }

  getFormValidationErrors() {
    this.validateErrors = [];

    Object.keys(this.editForm.controls).forEach(key => {
      const errors: ValidationErrors = this.editForm.get(key).errors; 
      if (errors) {
        Object.keys(errors).forEach(keyError => {
          if (this.editForm.get(key).hasError(keyError)) {
            const error: String[] = [key, keyError + ': ' + errors[keyError]];
            this.validateErrors.push(error);
            }
        });
      }
    });
  }

  subscribeFormChanges() {
    this.editForm.valueChanges.subscribe(() => {
      this.getFormValidationErrors();
      }
    );
  }

}
