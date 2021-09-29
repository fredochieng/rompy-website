import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { MobileLinksComponent } from './components/mobile-links/mobile-links.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    // components
    MobileHeaderComponent,
    MobileLinksComponent,
    MobileMenuComponent
],
imports: [
    // modules (angular)
    CommonModule,
    RouterModule,
    // modules
    SharedModule
],
exports: [
    // components
    MobileHeaderComponent,
    MobileMenuComponent
]
 
})
export class MobileModule { }
