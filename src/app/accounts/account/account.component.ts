import { Component, OnInit } from '@angular/core';

import { AccountsService } from '../../services/accounts.service';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { SpinnerService } from '../../shared/spinner/spinner.service';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public clientDetails: Account;
  public accDetail: any;

  constructor(private accountsService: AccountsService,
              private spinnerService: SpinnerService) { }

  ngOnInit() {
   this.getUserAcc();
  }

  /**
   * Getting user accounts and details
   */
  getUserAcc() {
    this.spinnerService.show();
    this.accountsService.getUser().subscribe(clientDetails => {
      this.clientDetails = clientDetails;
    }, (onError) => {console.log("check error",onError);},
    () => {
      this.spinnerService.hide();
    });
  }
}
