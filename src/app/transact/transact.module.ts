import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TransactRoutingModule } from './transact-routing.module';

import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransactComponent } from './transact/transact.component';

@NgModule({
  declarations: [DepositComponent, WithdrawComponent, TransactComponent],
  imports: [
    CommonModule,
    TransactRoutingModule,
    FormsModule
  ]
})
export class TransactModule { }
