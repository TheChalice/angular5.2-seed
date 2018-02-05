import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElModule } from 'element-angular'
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {  RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ElModule.forRoot()
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
   ],
})
export class LoginModule { 
  
}