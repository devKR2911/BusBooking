import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/service/http/http.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private http: HttpService) { }

  public myDataArray;

  ngOnInit() {
    this.getAPIData();
  }

  getAPIData() {
    // this.http.getData().subscribe(res => {
    //   this.myDataArray = res;
    // })
  }

}
