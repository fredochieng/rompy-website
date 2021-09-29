import { /*LOCALE_ID, */NgModule } from '@angular/core';
// modules (angular)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';

// modules
import { AppRoutingModule } from './app-routing.module';
import { BlocksModule } from './modules/blocks/blocks.module';
// import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { MobileModule } from './modules/mobile/mobile.module';
import { SharedModule } from './shared/shared.module';
// import { WidgetsModule } from './modules/widgets/widgets.module';

// components
import { AppComponent } from './app.component';
import { RootComponent } from './components/root/root.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { Globals } from './globals';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './shared/interceptors/token-interceptor.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { LoginComponent } from './pages/login/login.component';
import { PageResetComponent } from './pages/page-reset/page-reset.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        // components
        AppComponent,
        RootComponent,
        // pages
        HomepageComponent,
        LoginComponent,
        PageResetComponent,
    ], 
    imports: [
        // modules (angular)
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        // modules (third-party)
        CarouselModule,
        ToastrModule.forRoot(),
        // modules
        AppRoutingModule,
        BlocksModule,
        // FooterModule,
        HeaderModule,
        MobileModule,
        SharedModule,
        // WidgetsModule
        NgxErrorsModule,
        
    ],
    providers: [
        // { provide: LOCALE_ID, useValue: 'it' }
        Globals,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
