import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-new-acount',
  templateUrl: './new-acount.component.html',
  styleUrls: ['./new-acount.component.css']
})
export class NewAcountComponent implements OnInit {

  private clientDetails;


  /**
  * Create an instance of NewAcountComponent
  * @Param {AccountsService} - the instance of the AccountsService being injected
  */
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.getUserAcc();
  }

  /**
   * Getting user accounts and details
   */
  getUserAcc() {
    this.accountsService.getUser().subscribe(clientDetails => {
      this.clientDetails = clientDetails;
    }, (onError) => {console.log("check error",onError);},
    () => {
    });
  }

  /**
   * Creating new account
   * @param {NgForm} form the balance of the account  being updated.
   */
  newAccount(form:NgForm) {
    if (!form.valid) {
      return;
    }

    const amount = form.value.balance;
    const overdraft = form.value.overdraft;
    const accountNumber = Math.floor(100000000 + Math.random() * 900000000);
    this.clientDetails.accounts.push(accountNumber);

    this.accountsService.createAccount(this.clientDetails).subscribe(acc => {
      //console.log(acc);
    },(onError) => {},
    () => {
      this.updateNewAccount(accountNumber, amount, overdraft);
    });
  }

  /**
   * Update an account deatils
   * @param {string} accountNumber account number  of the account being updated.
   * @param {string} amount the balance of the account  being updated.
   * @param {string} overdraft the balance of the account being updated.
   */
  updateNewAccount(accountNumber, amount, overdraft) {
    this.accountsService.accountUpdate(accountNumber, amount, overdraft).subscribe(acc=> {
      console.log(acc);
    });
  }
}
