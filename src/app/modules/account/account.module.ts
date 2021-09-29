import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';

// modules
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../../shared/shared.module';

// components
import { LayoutComponent } from './components/layout/layout.component';

// pages

import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PagePasswordComponent } from './pages/page-password/page-password.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageEditAddressComponent } from './pages/page-edit-address/page-edit-address.component';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { PageAddServiceComponent } from './pages/page-add-service/page-add-service.component';
import { PageSubscriptionComponent } from './pages/page-subscription/page-subscription.component';
import { ImageUploaderModule } from 'ngx-image-uploader-next';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PageAddAvailabilityComponent } from './pages/page-add-availability/page-add-availability.component';
// import { InternationalPhoneNumber2Module } from 'ngx-international-phone-number2';

@NgModule({
    declarations: [
        // components
        LayoutComponent,
        // pages
        PageDashboardComponent,
        PageLoginComponent,
        PagePasswordComponent,
        PageProfileComponent,
        PageEditAddressComponent,
        PageAddServiceComponent,
        PageSubscriptionComponent,
        PageAddAvailabilityComponent
    ],
    imports: [
        // modules (angular)
        CommonModule,
        // modules
        AccountRoutingModule,
        SharedModule,
        NgxErrorsModule,
        // InternationalPhoneNumber2Module,
        ImageUploaderModule,
        NgMultiSelectDropDownModule.forRoot(),
    
    ]
})
export class AccountModule { }
