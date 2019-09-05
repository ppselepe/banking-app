import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AccountsService } from '../../services/accounts.service';
import { Balance } from '../../models/balance.model';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  public accountDetail: Balance;
  public accountNumber: string;


  /**
  * Create an instance of AccountDetailComponent
  * @Param {AccountsService} - the instance of the AccountsService being injected
  * @Param {ActivatedRoute} - the instance of the ActivatedRoute being injected
  */
  constructor( private accountService: AccountsService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getAccountDetail();
  }

  getAccountDetail() {
    this.accountNumber = this.route.snapshot.paramMap.get('id');

    this.accountService.getAccountDetail(this.accountNumber).subscribe( accResponse => {
      this.accountDetail = accResponse;
    });
  }

}
