import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'accounts',
    loadChildren: './accounts/accounts.module#AccountsModule',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'transact',
    loadChildren: './transact/transact.module#TransactModule',
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    loadChildren: './accounts/accounts.module#AccountsModule',
    canActivate: [ AuthGuard ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
