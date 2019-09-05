import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  private userAccount;
  private accountDetail;

  /**
  * Create an instance of WithdrawComponent
  * @Param {AccountsService} - the instance of the AccountsService being injected
  */
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.getUserAcc();
  }

  getUserAcc() {
    this.accountsService.getUser().subscribe(userAccount => {
      this.userAccount = userAccount;
      console.log(userAccount);
    });
  }

  onChange(accountNumber: string) {
    this.getAccountDetail(accountNumber);
  }

  getAccountDetail(accountNumber: string) {
    this.accountsService.getAccountDetail(accountNumber).subscribe( accResponse => {
      this.accountDetail = accResponse;
    });
  }

  deposit(form:NgForm) {
    if (!form.valid) {
      return;
    }

    const amount = form.value.amount;
    const accountNumber = form.value.acc;

    const balance = parseInt(this.accountDetail.balance) - parseInt(amount);

    this.accountsService.accountUpdate(accountNumber, balance, this.accountDetail.overdraft).subscribe(acc => {

    }, (OnError) => {},
    () => {

    });

  }
}
