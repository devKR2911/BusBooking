import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';


import { HttpService } from '../shared/service/http/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router, public ngProgress: NgProgress, private httpService: HttpService) { }
  public locationArray: any[] = [];
  public dateArray: any[] = [];
  ngOnInit() {
    this.ngProgress.start();
    //this.httpService.getBusData().subscribe( res => {
      //console.log(res);
      //this.locationArray = res;
      this.locationArray = this._dataService.routes;
      this.dateArray = this._dataService.dates;
      this.ngProgress.done();
    //})
  }


  public fromLocation: any = {};
  public toLocation: any = {};
  public selectedDate: any = {};
  public loggedInUserId;

  public setData() {
    this.loggedInUserId = this._dataService.getLoginUserId();
      if(this.loggedInUserId){
      if(this.fromLocation && this.fromLocation.hasOwnProperty('id') && this.toLocation && this.toLocation.hasOwnProperty('id') && this.selectedDate && this.selectedDate.hasOwnProperty('id')) {
        var searchDetails = {
          from: this.fromLocation,
          to  : this.toLocation,
          date: this.selectedDate
        }
        debugger;
        this._dataService.setData(searchDetails);
        // this._router.navigate(['booking/busList']);
        this._router.navigate(['booking/busList']);
      } else {
        alert("Please select travel details");
      }
    } else {
      alert("Please login first");
      this._router.navigate(['login']);
    }
  }



}
