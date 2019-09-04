import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import  { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HttpHeaders } from '@angular/common/http';

import { Account } from '../models/account.model';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private user;

  constructor(private http: HttpClient, private authService:AuthService ) {
    this.authService.getUserInfo().subscribe(user => {
      this.user = user;
    });

  }

  getUser():Observable<Account> {
    let api = 'https://momentum-retail-practical-test.firebaseio.com/';
    return this.authService.user.pipe(take(1),exhaustMap(user => {
      api = api + "clients/" + user.id + ".json";
      return this.http.get(api,
        {
          params: new HttpParams().set('auth', user.token)
        });
    }),
    map((resData:any) => {
      return new Account(resData);
    }));
  }

  getAccountDetail(accountNumber: string) {
    let api = 'https://momentum-retail-practical-test.firebaseio.com/';
    return this.authService.user.pipe(take(1),exhaustMap(user => {
      api = api + "accounts/" + accountNumber + ".json";
      return this.http.get(api,
        {
          params: new HttpParams().set('auth', user.token)
        });
    }),
    map((resData:any) => {
      if (resData == null) {
        resData = {"balance":0,"overdraft":0};
      }
      return resData;
    }));
  }

  accountUpdate(accountNumber, amount, overdraft) {
    let api = 'https://momentum-retail-practical-test.firebaseio.com/';
    return this.authService.user.pipe(take(1),exhaustMap(user => {
      api = api + "accounts/" + accountNumber + ".json";
      return this.http.put(api, {"balance":amount,"overdraft":overdraft},
        {
          params: new HttpParams().set('auth', user.token)
        });
    }),
    map((resData:any) => {
      return resData;
    }));
  }

  createAccount(account)  {
    let api = 'https://momentum-retail-practical-test.firebaseio.com/';
    return this.authService.user.pipe(take(1),exhaustMap(user => {
      api = api + "clients/" + user.id + ".json";
      return this.http.put(api,account,
        {
          params: new HttpParams().set('auth', user.token)
        });
    }),
    map((resData:any) => {
      return resData;
    }));
  }

}
