import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElModule } from 'element-angular'
import {  RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ElModule.forRoot()
  ],
  declarations: [
    HeroesComponent,
  ],
  providers: [
   ],
})
export class HeroesModule { 
  
}