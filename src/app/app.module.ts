import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routes/routing.module';
import { MaterialModule } from './modules/material/material.module';
import { SharedModule } from './modules/shared/shared.module';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { RepeatUsernameDirective } from './validators/repeat-username.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    RepeatUsernameDirective
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
