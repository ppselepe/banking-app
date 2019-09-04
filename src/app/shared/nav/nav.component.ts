import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import  { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe( user => {
      this.isAuthenticated = !user ? false : true;
    });
  }

   logout() {
     this.authService.logout();
   }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
