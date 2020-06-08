import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatDividerModule} from '@angular/material/divider'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatDividerModule]
})
export class MaterialModule { }
