import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError,tap } from 'rxjs/operators';
import { BehaviorSubject,throwError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  getStatus() {
    return this.status.asObservable();
  }

  show() {
    this.status.next(true);
  }

  hide() {
    this.status.next(false);
  }

}
