import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserComponent } from '../../components/user/user.component';
import { SharedModule } from '../shared/shared.module';
import { UserResolver } from '../../resolver/user.resolver';
import { CreateUserComponent } from '../../components/user/create-user/create-user.component';
import { MaterialModule } from '../material/material.module';
import { UserListComponent } from '../../components/user/user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatePipe } from '../../pipes/paginate.pipe';
import { RepeatUsernameDirective } from '../../validators/repeat-username.directive';
import { UserDetailComponent } from '../../components/user/user-detail/user-detail.component';
import { UserEditComponent } from '../../components/user/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: UserComponent,
    resolve: {
      user: UserResolver
    },
    children: [
      {
        path: '',
        component: CreateUserComponent
      },
      {
        path: 'detail/:id',
        component: UserDetailComponent
      },
      {
        path: 'edit/:id',
        component: UserEditComponent
      }
    ]
  },

];


@NgModule({
  declarations: [UserComponent, CreateUserComponent, UserListComponent, PaginatePipe, UserDetailComponent, UserEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [RepeatUsernameDirective]
})
export class UserModule { }
