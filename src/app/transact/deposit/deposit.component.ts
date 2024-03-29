import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  private userAccount;
  private accountDetail;

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

    const balance = parseInt(this.accountDetail.balance) + parseInt(amount);

    this.accountsService.accountUpdate(accountNumber, balance, this.accountDetail.overdraft).subscribe(acc => {
    
    });
  }
}
