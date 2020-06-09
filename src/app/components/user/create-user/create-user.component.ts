import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../../../models/User';
import { ApiServiceService } from '../../../services/api-service.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { config } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private _api : ApiServiceService, private _snackBar: MatSnackBar) { }

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
    console.log(JSON.stringify(this.user));

    this._api.createUser(this.user).subscribe(response => {
      this._snackBar.open('Usuario creado satisfactoriamente', '', {
        duration: 10000,
        panelClass: ['notif-success']
      });
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
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{5}')])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{9}')])],
      website: ['', Validators.required],
    });
  }


  mostrarLoader(mostrar: boolean) {

    if (mostrar){
      debugger;
      document.querySelector('#loader-panel').classList.add('show');
      document.querySelector('#loader-panel').classList.remove('hide');
      
      document.querySelector('#textPanel').classList.add('hide');
      document.querySelector('#textPanel').classList.remove('show');
    } else{

      document.querySelector('#loader-panel').classList.add('hide');
      document.querySelector('#loader-panel').classList.remove('show');
      
      document.querySelector('#textPanel').classList.add('show');
      document.querySelector('#textPanel').classList.remove('hide');
    }
  }

}
