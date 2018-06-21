import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) { }

  public userId: string = '';

  ngOnInit() {
  }

  public validate() {
    this._dataService.validateLogin(this.userId);
    this._router.navigate(['home']);
  }

}
