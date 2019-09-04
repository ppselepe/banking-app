import { Component, OnInit } from '@angular/core';

import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  public status: boolean;

  constructor(
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.spinnerService.getStatus().subscribe(status => {
      this.status = status;
    });
  }
  // template: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
}
