import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  public isUserLoggedIn: boolean = false;
  public userLoginId: string = '';

  public routes: any[] = [{id: 0, name: 'tvc'}, {id: 1, name: 'ers'}, {id: 2, name: 'tcr'}];

  public dates: any[] = [{id: 0, value: "2018-05-26"}, {id: 1, value: "2018-05-27"}]

  public vehicleList: any[] = [
    {id: 0, from: 'tvc', to: 'tcr', date: "2018-05-26", ticketAmount: 100, seats: [{id: 0, seatNo: 0, userId: ''}, {id: 1, seatNo: 1, userId: ''}, {id: 2, seatNo: 2, userId: ''}, {id: 3, seatNo: 3, userId: ''}, {id: 4, seatNo: 4, userId: ''}, {id: 5, seatNo: 5, userId: ''}, {id: 6, seatNo: 6, userId: ''}, {id: 7, seatNo: 7, userId: ''}, {id: 8, seatNo: 8, userId: ''}, {id: 9, seatNo: 9, userId: ''}]},
    {id: 1, from: 'tvc', to: 'ers', date: "2018-05-27", ticketAmount: 200, seats: [{id: 0, seatNo: 0, userId: ''}, {id: 1, seatNo: 1, userId: ''}, {id: 2, seatNo: 2, userId: ''}, {id: 3, seatNo: 3, userId: ''}, {id: 4, seatNo: 4, userId: ''}, {id: 5, seatNo: 5, userId: ''}, {id: 6, seatNo: 6, userId: ''}, {id: 7, seatNo: 7, userId: ''}, {id: 8, seatNo: 8, userId: ''}, {id: 9, seatNo: 9, userId: ''}]},
    {id: 2, from: 'tvc', to: 'tcr', date: "2018-05-26", ticketAmount: 150, seats: [{id: 0, seatNo: 0, userId: ''}, {id: 1, seatNo: 1, userId: ''}, {id: 2, seatNo: 2, userId: ''}, {id: 3, seatNo: 3, userId: ''}, {id: 4, seatNo: 4, userId: ''}, {id: 5, seatNo: 5, userId: ''}, {id: 6, seatNo: 6, userId: ''}, {id: 7, seatNo: 7, userId: ''}, {id: 8, seatNo: 8, userId: ''}, {id: 9, seatNo: 9, userId: ''}]},
    {id: 3, from: 'tvc', to: 'tcr', date: "2018-05-27", ticketAmount: 100, seats: [{id: 0, seatNo: 0, userId: ''}, {id: 1, seatNo: 1, userId: ''}, {id: 2, seatNo: 2, userId: ''}, {id: 3, seatNo: 3, userId: ''}, {id: 4, seatNo: 4, userId: ''}, {id: 5, seatNo: 5, userId: ''}, {id: 6, seatNo: 6, userId: ''}, {id: 7, seatNo: 7, userId: ''}, {id: 8, seatNo: 8, userId: ''}, {id: 9, seatNo: 9, userId: ''}]},
    {id: 4, from: 'tvc', to: 'ers', date: "2018-05-26", ticketAmount: 100, seats: [{id: 0, seatNo: 0, userId: ''}, {id: 1, seatNo: 1, userId: ''}, {id: 2, seatNo: 2, userId: ''}, {id: 3, seatNo: 3, userId: ''}, {id: 4, seatNo: 4, userId: ''}, {id: 5, seatNo: 5, userId: ''}, {id: 6, seatNo: 6, userId: ''}, {id: 7, seatNo: 7, userId: ''}, {id: 8, seatNo: 8, userId: ''}, {id: 9, seatNo: 9, userId: ''}]},
    {id: 5, from: 'tvc', to: 'tcr', date: "2018-05-27", ticketAmount: 100, seats: [{id: 0, seatNo: 0, userId: ''}, {id: 1, seatNo: 1, userId: ''}, {id: 2, seatNo: 2, userId: ''}, {id: 3, seatNo: 3, userId: ''}, {id: 4, seatNo: 4, userId: ''}, {id: 5, seatNo: 5, userId: ''}, {id: 6, seatNo: 6, userId: ''}, {id: 7, seatNo: 7, userId: ''}, {id: 8, seatNo: 8, userId: ''}, {id: 9, seatNo: 9, userId: ''}]},
    {id: 6, from: 'tvc', to: 'tcr', date: "2018-05-26", ticketAmount: 100, seats: [{id: 0, seatNo: 0, userId: ''}, {id: 1, seatNo: 1, userId: ''}, {id: 2, seatNo: 2, userId: ''}, {id: 3, seatNo: 3, userId: ''}, {id: 4, seatNo: 4, userId: ''}, {id: 5, seatNo: 5, userId: ''}, {id: 6, seatNo: 6, userId: ''}, {id: 7, seatNo: 7, userId: ''}, {id: 8, seatNo: 8, userId: ''}, {id: 9, seatNo: 9, userId: ''}]},
    {id: 7, from: 'tvc', to: 'ers', date: "2018-05-27", ticketAmount: 100, seats: [{id: 0, seatNo: 0, userId: ''}, {id: 1, seatNo: 1, userId: ''}, {id: 2, seatNo: 2, userId: ''}, {id: 3, seatNo: 3, userId: ''}, {id: 4, seatNo: 4, userId: ''}, {id: 5, seatNo: 5, userId: ''}, {id: 6, seatNo: 6, userId: ''}, {id: 7, seatNo: 7, userId: ''}, {id: 8, seatNo: 8, userId: ''}, {id: 9, seatNo: 9, userId: ''}]},
    {id: 8, from: 'tvc', to: 'tcr', date: "2018-05-26", ticketAmount: 100, seats: [{id: 0, seatNo: 0, userId: ''}, {id: 1, seatNo: 1, userId: ''}, {id: 2, seatNo: 2, userId: ''}, {id: 3, seatNo: 3, userId: ''}, {id: 4, seatNo: 4, userId: ''}, {id: 5, seatNo: 5, userId: ''}, {id: 6, seatNo: 6, userId: ''}, {id: 7, seatNo: 7, userId: ''}, {id: 8, seatNo: 8, userId: ''}, {id: 9, seatNo: 9, userId: ''}]},
    {id: 9, from: 'tvc', to: 'tcr', date: "2018-05-27", ticketAmount: 100, seats: [{id: 0, seatNo: 0, userId: ''}, {id: 1, seatNo: 1, userId: ''}, {id: 2, seatNo: 2, userId: ''}, {id: 3, seatNo: 3, userId: ''}, {id: 4, seatNo: 4, userId: ''}, {id: 5, seatNo: 5, userId: ''}, {id: 6, seatNo: 6, userId: ''}, {id: 7, seatNo: 7, userId: ''}, {id: 8, seatNo: 8, userId: ''}, {id: 9, seatNo: 9, userId: ''}]}
  ];

  

  public searchData: any = {};

  public selectedSeatDetails: any = {};

  public setData (value) {
    this.searchData = value;
  }

  public getData () {
    return this.searchData;
  }

  public getAvailableVehicles(details) {
    //return this.vehicleList.filter(vehicle => vehicle.from == details.from.name && vehicle.to == details.to.name && vehicle.date == details.date.value)
    return this.vehicleList;
  }
  
  public setSelectedSeats(seats, bus) {
    this.selectedSeatDetails = {
      seats: seats,
      bus: bus
    }
  }

  public getSelectedSeats() {
    return this.selectedSeatDetails;
  }

  public validateLogin(userId) {
    this.isUserLoggedIn = true;
    this.userLoginId = userId;
  }

  public getLoginUserId() {
    return this.userLoginId;
  }

  public getBookedVehicleForUser() {
    var vehicleArray = [];
    for(var vehicleIndex = 0; vehicleIndex < this.vehicleList.length; vehicleIndex++) {
      var seatArray = this.vehicleList[vehicleIndex].seats.filter(seat => seat.userId == this.userLoginId);
      if(seatArray.length > 0) {
        vehicleArray.push(this.vehicleList[vehicleIndex]);
      }
    }
    return vehicleArray;
  }
}
