import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = true;
  error: string = null;


  /**
  * Create an instance of LoginComponent
  * @Param {AuthService} - the instance of the AuthService being injected
  * @Param {Router} - the instance of the Router being injected
  */
  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form:NgForm) {

      if (!form.valid) {
        return;
      }

      console.log(form.value);
      const email = form.value.email;
      const password = form.value.password;

      this.isLoading = true;
      this.authService.login(email, password).subscribe(
        responseData => {

          this.isLoading = false;
          this.router.navigate(['./accounts']);

        },
        errorRes =>{
          this.error = errorRes;


          this.isLoading = false;
        }
      )
      form.reset();

  }
}
