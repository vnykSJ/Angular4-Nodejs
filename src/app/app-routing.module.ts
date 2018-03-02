import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: './lazy-loading/login/login.module#LoginModule'
	},
	{
		path: 'signup',
		loadChildren: './lazy-loading/sign-up/sign-up.module#SignUpModule'
	},
	{
		path: 'home',
		loadChildren: './lazy-loading/home/home.module#HomeModule'
	},
	{
		path: '', 
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: '**', 
		redirectTo: 'login',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
