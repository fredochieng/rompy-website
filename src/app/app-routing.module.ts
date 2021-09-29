import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageResetComponent } from './pages/page-reset/page-reset.component';
import { LoginGuard } from './shared/guards/login.guard';


const routes: Routes = [

    {
        path: '',
        component: RootComponent,
        data: {
            // Header layout. Choose one of ['classic', 'compact'].
            headerLayout: 'classic',
            // Dropcart type. Choose one of ['dropdown', 'offcanvas'].
            dropcartType: 'dropdown'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HomepageComponent
            },
            {
                path: 'account',
                canActivate:[LoginGuard],
                loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
            },
            {
                path: 'escort',
                loadChildren: () => import('./modules/model/model.module').then(m => m.ModelModule)
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'reset',
                component: PageResetComponent
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
