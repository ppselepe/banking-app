import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError,tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';


import { User } from '../models/user.model';

interface AuthResData {
  kind: string;
  localId: string;
  email: string;
  idToken: string;
  Registered: boolean;
  refreshToken: string;
  expiresIn: string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string;

  /**
  * Create an instance of AuthService
  * @Param {HttpClient} - the instance of the HttpClient being iinjected
  */
  user = new BehaviorSubject<User>(null);
  constructor(private http:HttpClient, private router: Router  ) {
    this.api = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAR4Yezxk7Ao4qeFntu7tIvE7pH28Eh64Y';
  }


  /**
  * Handles user login request and response
  * @Param {string} email - email address of the user to be authenticated.
  * @Param {string} password -no less than  6 digits password of the user.
  */
  login(email: string, password: string) {
        return this.http.post<AuthResData>(this.api,
        {
          email: email,
          password: password,
          returnSecureToken: true
        })
        .pipe(tap(respData => {
            console.log("respData",respData);
          this.handleLogin(respData.email, respData.localId, respData.idToken, +respData.expiresIn);
         }),
         catchError(this.handleError));
    }



    /**
    * Get stored user data from the local storage when  the browser refresh
    *
    */
    autoLogin() {
      const authUser: {
        email: string;
        id: string;
        _token: string;
        _tokenExpirationDate: string;
      } = JSON.parse(localStorage.getItem('user'));
      if(!authUser) {
        return;
      }
      const storageUser = new User(authUser.email, authUser.id, authUser._token, new Date(authUser._tokenExpirationDate));

      if(storageUser.token) {
        this.user.next(storageUser)
      }

    }

    /**
    * Logs out the user and navigate to the login page
    *
    */

    logout() {
      this.user.next(null);
      this.router.navigate(['./login']);
      localStorage.setItem("user", JSON.stringify(null));
    }

  /**
   *  Handles user login respnse data and storew it in the localstorage
   * @param {string} email
   * @param {string} userId
   * @param {string} idToken
   */
    private handleLogin( email:string, userId:string, idToken: string, expiresIn: number) {
       const expirationDate =  new Date(new Date().getTime() + expiresIn * 1000);
       const user = new User(
         email,
         userId,
         idToken,
         expirationDate
       );
       this.user.next(user);
       localStorage.setItem("user", JSON.stringify(user));
    }

    public getToken() {
      return localStorage.getItem("user");
    }

    public getUserInfo() {
      console.log("User Infor");
      return this.user.asObservable();
    }

    /**
    * Handles error resonse messages and sets error messge for user
    *
    */
    private handleError(errorRes: HttpErrorResponse) {
      let errorMessage = "An unknown error has occured!";
      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message) {
        case "EMAIL_NOT_FOUND":
          errorMessage = "This email does not exist";
          break;
        case "INVALID_PASSWORD":
          errorMessage = "The passowrd is incorrect";
          break;
      }
      return throwError(errorMessage);

    }
}
