import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { UserComponent } from './user.component';
import { AboutComponent } from './about.component';
import { ServiceComponent } from './services.component';
import { CustomerComponent } from './customers.component';

const appRoutes: Routes = [
	{
		path: '',
		component: UserComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'services',
		component: ServiceComponent
	},
	{
		path: 'customers',
		component: CustomerComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);