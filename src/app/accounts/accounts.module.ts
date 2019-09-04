import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountComponent } from './account/account.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { NewAcountComponent } from './new-acount/new-acount.component';

@NgModule({
  declarations: [AccountComponent, SpinnerComponent, AccountsComponent, AccountDetailComponent, NewAcountComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule
  ]
})
export class AccountsModule { }
