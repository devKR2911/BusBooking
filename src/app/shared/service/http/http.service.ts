import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs/observable'
@Injectable()
export class HttpService {

  baseUrl = 'http://localhost:8081/'
  constructor(private httpClient: HttpClient) {

  }
  getBusData() {
    return this.httpClient.get<MyLocationInterface>(this.baseUrl + 'location');
  }

  getSearchBusData(details) {
    return this.httpClient.post<MyLocationInterface>(this.baseUrl + 'location', details);
  }

}

export class MyLocationInterface {
  id: number;
  from: string;
  to: string;
  date: string;
  tickrtAmount: number;
  seats: any[];
}