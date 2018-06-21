import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  errorMessage; 

  constructor(private _alertService: AlertService) { }

  ngOnInit() {
    this._alertService.getAlert().subscribe(msg => {
      this.errorMessage = msg;
      setTimeout(() => {
        this.errorMessage = '';
      }, 2000)
    })
  }

  

}
