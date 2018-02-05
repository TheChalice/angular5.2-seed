import { NgModule }             from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
// import { DashboardComponent }   from './pages/dashboard/dashboard.component';
import { HeroesComponent }      from './pages/heroes/heroes.component';
import { HeroDetailComponent }  from './pages/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'console', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'login', component:LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', }
];
const config: ExtraOptions = {
  useHash: true,
};
@NgModule({
  imports: [ RouterModule.forRoot(routes, config) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}