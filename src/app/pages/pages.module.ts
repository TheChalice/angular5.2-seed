import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { ElModule } from 'element-angular'

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroesModule } from './heroes/heroes.module';
import { PagesRoutingModule } from './pages-routing.module';
import { NoopInterceptor } from '../service/http.service';
const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    DashboardModule,
    PagesRoutingModule,
    HeroesModule,
    ElModule.forRoot()
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptor,
    multi: true,
  }],
})
export class PagesModule {
}
