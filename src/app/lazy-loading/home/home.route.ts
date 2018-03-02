import { ModuleWithProviders } from '@angular/core';
import { 
	Routes, 
	RouterModule 
} from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';

const routes: Routes = [
	{ 
		path: '', 
		component: HomeComponent 
	}
];

export const HomeRoute: ModuleWithProviders = RouterModule.forChild(routes);