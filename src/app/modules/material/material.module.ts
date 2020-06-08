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
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatMenuModule} from '@angular/material/menu'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatMenuModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, 
    MatPaginatorModule, MatInputModule, MatFormFieldModule, MatDividerModule, MatExpansionModule, MatMenuModule]
})
export class MaterialModule { }
