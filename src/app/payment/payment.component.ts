import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router, private alertSer: AlertService) { }

  selectedVehicleDetails: any = {};

  ngOnInit() {
    this.selectedVehicleDetails = this._dataService.getSelectedSeats();
    console.log(this.selectedVehicleDetails);
  }

  bookSeats() {
    var loogedInUser = this._dataService.getLoginUserId();
    var selectedSeats = this.selectedVehicleDetails.seats.filter(seat => seat.isSelected == true);
    for(var seatIndex = 0; seatIndex < selectedSeats.length; seatIndex++) {
      selectedSeats[seatIndex].userId = loogedInUser;
    }
    this.alertSer.setAlert("Selected seats have been booked successfully");
    console.log(this.selectedVehicleDetails);
    this._router.navigate(['home']);
  }

}
