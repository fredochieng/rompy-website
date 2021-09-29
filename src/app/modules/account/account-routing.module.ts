import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PagePasswordComponent } from './pages/page-password/page-password.component';
import { PageEditAddressComponent } from './pages/page-edit-address/page-edit-address.component';
import { PageAddServiceComponent } from './pages/page-add-service/page-add-service.component';
import { PageSubscriptionComponent } from './pages/page-subscription/page-subscription.component';
import { PageAddAvailabilityComponent } from './pages/page-add-availability/page-add-availability.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [ 
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: PageDashboardComponent
            },
            {
                path: 'profile',
                component: PageProfileComponent
            },
    
            {
                path: 'addresses/:addressId',
                component: PageEditAddressComponent
            },
            
            {
                path: 'services',
                component: PageAddServiceComponent
            },
            {
                path: 'availability',
                component: PageAddAvailabilityComponent
            },
            {
                path: 'subscription',
                component: PageSubscriptionComponent
            },
            {
                path: 'password',
                component: PagePasswordComponent
            }
        ]
    },
    {
        path: 'login',
        component: PageLoginComponent
    },
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
