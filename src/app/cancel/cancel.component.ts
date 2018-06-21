import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  availableVehicles: any = [];
  loggedInUserId;
  cancelArray: any = [];

  constructor(private _dataService: DataService) {
    this.availableVehicles = this._dataService.getBookedVehicleForUser();
    console.log(this.availableVehicles);
    this.loggedInUserId = this._dataService.getLoginUserId().toString();
    console.log(this.loggedInUserId);
  }

  cancelSeat(bus) {
    var cancellingSeats = bus.seats.filter(seat => seat.isCancellable == true);
    for(var seatIndex = 0; seatIndex < cancellingSeats.length; seatIndex++) {
      delete(cancellingSeats[seatIndex].isCancellable);
      cancellingSeats[seatIndex].userId = '';
    }
  }

  selectSeat(seat, bus) {
    seat.isCancellable = seat.hasOwnProperty('isCancellable')? !seat.isCancellable: true;
    seat.isSelected = false;
    console.log(seat.isCancellable);
  }

  ngOnInit() {
  }

}
