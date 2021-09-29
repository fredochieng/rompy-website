import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavComponent } from './components/nav/nav.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { LinksComponent } from './components/links/links.component';
import { AccountMenuComponent } from './components/account-menu/account-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { MegamenuComponent } from './components/megamenu/megamenu.component';


 
@NgModule({
  declarations: [
    HeaderComponent,
    TopbarComponent,
    NavComponent,
    IndicatorComponent,
    LinksComponent,
    AccountMenuComponent,
    MenuComponent,
    MegamenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // modules
    SharedModule
  ],
  exports: [
    HeaderComponent,
    TopbarComponent,
    NavComponent,
    IndicatorComponent,
    LinksComponent,
    AccountMenuComponent
  ]
})
export class HeaderModule { }
