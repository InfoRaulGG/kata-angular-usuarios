import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routes/routing.module';
import { MaterialModule } from './modules/material/material.module';
import { SharedModule } from './modules/shared/shared.module';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [SharedModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
