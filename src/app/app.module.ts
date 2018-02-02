import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { ElModule } from 'element-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }         from './app.component';

import { DashboardComponent }   from './page/dashboard/dashboard.component';
import { HeroesComponent }      from './page/hero/heroes.component';
import { HeroDetailComponent }  from './page/hero-detail/hero-detail.component';

import { HeroService }          from './service/hero.service';
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
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true,
    },HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }