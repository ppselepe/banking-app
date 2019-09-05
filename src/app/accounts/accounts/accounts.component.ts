import { Component, OnInit } from '@angular/core';

import { AccountsService } from '../../services/accounts.service';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { SpinnerService } from '../../shared/spinner/spinner.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
