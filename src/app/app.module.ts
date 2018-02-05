import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { ElModule } from 'element-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }         from './app.component';

// import { DashboardComponent }   from './page/dashboard/dashboard.component';
import { LoginComponent }      from './pages/login/login.component';
// import { HeroDetailComponent }  from './pages/hero-detail/hero-detail.component';


import { NoopInterceptor } from './service/http.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ElModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true,
    }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }