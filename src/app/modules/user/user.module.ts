import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserComponent } from '../../components/user/user.component';
import { SharedModule } from '../shared/shared.module';
import { UserResolver } from '../../resolver/user.resolver';
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { CreateUserComponent } from '../../components/user/create-user/create-user.component';
import { MaterialModule } from '../material/material.module';
import { UserListComponent } from '../../components/user/user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatePipe } from '../../pipes/paginate.pipe';

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
      }
    ]
  },

];


@NgModule({
  declarations: [UserComponent, CreateUserComponent, UserListComponent, PaginatePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class UserModule { }
