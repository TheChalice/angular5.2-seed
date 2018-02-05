import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElModule } from 'element-angular'
import {  RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ElModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
   ],
})
export class DashboardModule { 
  
}