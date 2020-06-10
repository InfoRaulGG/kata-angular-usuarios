import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { DataService } from '../services/data.service';
import { User } from '../models/User';


export function notRepeatUsername(users: User[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (users.find(user => user.username === control.value as string) ) {
      console.log(control.value as string);
      return { 'repeat' : true };
    }
    return null;
  };
}




@Directive({
  selector: '[appRepeatUsername]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RepeatUsernameDirective, multi: true }]
})
// tslint:disable-next-line: directive-class-suffix
export class RepeatUsernameDirective implements Validator {

  constructor(private _data: DataService) { }



  validate(control: AbstractControl): ValidationErrors {
    const username: string = control.value as string;
    if (!username) { return; }  
    const exist = this._data.users.find(user => user.username === username);

    if(exist){
      // Bad return
      return {appRepeatUsername: {message: 'El usuario ya se encuentra registrado.'}};
    }

    return;
  }
}
