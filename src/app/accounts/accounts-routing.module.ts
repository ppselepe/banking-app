import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { NewAcountComponent } from './new-acount/new-acount.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  { path: 'accounts', component: AccountComponent },
  { path: 'new-account', component: NewAcountComponent },
  { path: 'detail/:id', component: AccountDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
