import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { User } from '../../../models/User';
import { ApiServiceService } from '../../../services/api-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../../services/data.service';
import { notRepeatUsername } from '../../../validators/repeat-username.directive';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})


export class CreateUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private _api : ApiServiceService, 
    private _snackBar: MatSnackBar, private _data: DataService) { }

  createForm: FormGroup;
  user: User;
  loader: boolean = false;

  ngOnInit() {
    this.inicializarForm();
  }

  limpiarCampos(): void {
    this.createForm.markAsPristine();
    this.createForm.markAsUntouched();
    this.inicializarForm();
  }

  onSubmit(form: FormGroup): void {

    this.loader = true;

    if (form.invalid) {
      this.limpiarCampos();
      this._snackBar.open('Ha ocurrido un error con el formulario, algun campo no satisfactorio', '', {
        duration: 10000,
        panelClass: ['notif-bad']
      });
    }

    this.user = new User(form.value);

    this._api.createUser(this.user).subscribe(response => {
      this._snackBar.open('Usuario creado satisfactoriamente', '', {
        duration: 10000,
        panelClass: ['notif-success']
      });

      this._data.users.push(this.user);
      this.limpiarCampos();
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

  inicializarForm() {
    this.createForm = this.fb.group({
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
}
