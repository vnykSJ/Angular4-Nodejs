import { NgModule } from '@angular/core';
import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../../components/login/login.component';
import { LoginRoute } from './login.route';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
	ReactiveFormsModule,
    LoginRoute
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
