import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable, pipe } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';
import { delay, debounce } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})

export class UserResolver implements Resolve<Observable<User>> {

    // tslint:disable-next-line: variable-name
    constructor(private _api: ApiServiceService) {

    }

    resolve() {
        return this._api.getAllUser().pipe(
            delay(750)
        );
    }
}
