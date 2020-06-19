import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AUTH_PROVIDERS } from './common/guard/auth.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './common/guard/auth.guard';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'brycen',
    canActivate: [AuthGuard],
    loadChildren: () => import('./brycen/brycen.module').then(m => m.BrycenModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AUTH_PROVIDERS,
    AuthGuard,
  ]
})
export class AppRoutingModule { }
