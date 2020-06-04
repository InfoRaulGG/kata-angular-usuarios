import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserComponent } from '../../components/user/user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: UserComponent
  }
];


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserModule { }
