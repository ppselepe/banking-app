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

  private leina:string;
  private response: any
  public name: string;
//public test = "Foo";


  constructor(private accountsService: AccountsService,private spinnerService: SpinnerService) { }

  ngOnInit() {
    //this.getUserAcc()
  }

  getUserAcc() {
    //this.spinnerService.show();
    this.accountsService.getUser().subscribe(accounts => {
      this.response = accounts.name;
      console.log("response",this.response);

      // this.isLoading = "Bob Builderd";
    }, (onError)  => {}
    , () => {


    });
  }

  does() {
    this.leina = "phuti";
    console.log("the buttons work");
    this.accountsService.getUser().subscribe( response => {
       this.response = response;
       console.log("response s",this.response);
    });
  }

}
