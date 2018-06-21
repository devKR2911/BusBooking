import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Router } from '@angular/router';
import {MyLocationInterface} from '../shared/service/http/http.service';
import { HttpService } from '../shared/service/http/http.service';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router, private _httpService: HttpService) { }

  public searchData: any;
  public loggedInUserId: any;
  public selectedSeatArray: any = [];
  public selectedBus: any = {
    id: null
  };

  public seatTotal: any;
  public totalAmount: any;
  public gstLimit = 500;



  //public availableVehicles:MyLocationInterface;
  public availableVehicles:any = [];

  ngOnInit() {
    debugger;
    this.searchData = this._dataService.getData();
    console.log(this.searchData);
    this.availableVehicles = this._dataService.getAvailableVehicles(this.searchData);
    //console.log(this.availableVehicles);
    this.loggedInUserId = this._dataService.getLoginUserId();
    console.log(this.searchData);
    // this._httpService.getSearchBusData(this.searchData).subscribe(res => {
    //   this.availableVehicles = res;
    // })
  }

  selectBus(bus) {
    this.selectedBus = bus;
    console.log(this.selectedBus);
  }

  selectSeat(seat, bus) {
    if(seat.hasOwnProperty('isSelected')) {
      seat.isSelected = !seat.isSelected;
    } else {
      seat.isSelected = true;
      //seat.userId = this.loggedInUserId;
    }

    var total = 0;
    var seatList = this.selectedBus.seats.filter(seat => seat.isSelected == true && !seat.userId);
    if(seatList.length > 0){
      total = seatList.length * bus.ticketAmount;
    } else {
      total = 0;
    }
    this.seatTotal = total;
    this.totalAmount = this.seatTotal > this.gstLimit? this.seatTotal * 1.1: this.seatTotal;
  }

  bookSeat(bus) {
    var seatList = bus.seats.filter(seat => seat.isSelected == true && !seat.userId);
    if(seatList.length > 0) {
      this._dataService.setSelectedSeats(seatList, bus);
      this._router.navigate(['booking/payment']);
    }
  }

  // totalAmount(bus) {
  //   var total = 0;
  //   var seatList = this.selectedBus.seats.filter(seat => seat.isSelected == true && !seat.userId);
  //   if(seatList.length > 0){
  //     total = seatList.length * bus.ticketAmount;
  //   } else {
  //     total = 0;
  //   }
  //   return total;
  // }

}
