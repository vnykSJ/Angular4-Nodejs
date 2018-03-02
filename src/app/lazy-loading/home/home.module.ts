import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../../components/home/home.component';
import { HomeRoute } from './home.route';

@NgModule({
  imports: [
    CommonModule,
    HomeRoute
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule { }
