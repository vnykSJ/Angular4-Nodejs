import { NgModule } from '@angular/core';
import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { SignUpRoute } from './sign-up.route';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
	ReactiveFormsModule,
    SignUpRoute
  ],
  declarations: [ SignUpComponent ]
})
export class SignUpModule { }
