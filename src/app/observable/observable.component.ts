import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  data: Observable<string>;
  fruitArray: any[] = [];

  constructor(private alertService: AlertService) { }

  mySubscribeObj;

  ngOnInit() {
    this.data = new Observable(observ => {
      this.mySubscribeObj = observ;
      setTimeout(() => {
        observ.next("F 1");
      }, 3000)
      setTimeout(() => {
        observ.next("F 2");
        observ.unsubscribe();
      }, 6000)
      setTimeout(() => {
        observ.next("F 3");
      }, 9000)
    });

    setTimeout(() => {
      this.mySubscribeObj.unsubscribe();
    }, 8000)

    this.data.subscribe(fruit => {
      this.fruitArray.push(fruit);
      console.log(this.fruitArray);
    })
  }

  setData() {
    this.alertService.setAlert("Oops Something went wrong.");
  }

}
