import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/shared/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { PageHeaderComponent } from 'src/app/components/shared/page-header/page-header.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent,
    FooterComponent,
    PageHeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [NavbarComponent, FooterComponent, PageHeaderComponent]
})
export class SharedModule { }
