import { ModuleWithProviders } from '@angular/core';
import { 
	Routes, 
	RouterModule 
} from '@angular/router';

import { SignUpComponent } from '../../components/sign-up/sign-up.component';

const routes: Routes = [
	{ 
		path: '', 
		component: SignUpComponent 
	}
];

export const SignUpRoute: ModuleWithProviders = RouterModule.forChild(routes);