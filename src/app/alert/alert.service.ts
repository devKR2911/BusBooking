import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {

  alertMessage=  new Subject<string>();
  constructor() { }

  setAlert(msg) {
    this.alertMessage.next(msg);
  }

  getAlert() {
    return this.alertMessage.asObservable();
  }

}
