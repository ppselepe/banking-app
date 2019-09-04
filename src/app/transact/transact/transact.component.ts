import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transact',
  templateUrl: './transact.component.html',
  styleUrls: ['./transact.component.css']
})
export class TransactComponent implements OnInit {
  menu: any;
  submenus: any;

  constructor(private router: Router) {}

  ngOnInit() {}

}
