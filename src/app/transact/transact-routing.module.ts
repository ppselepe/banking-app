import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransactComponent } from './transact/transact.component';

const routes: Routes = [
  { path: '', component: TransactComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactRoutingModule { }
