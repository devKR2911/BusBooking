import { Component, OnInit, OnChanges, OnDestroy, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit {

  @Input() title;
  public myClassVar: string = '';

  constructor() {
    console.log("Component on constructor phase");
    setTimeout(()=> {
      this.myClassVar = "New Data";
    }, 4000);
  }

  ngOnInit() {
    console.log("Component on intit phase");
  }

  ngOnChanges() {
    console.log("Component on changes phase");
  }

  ngOnDestroy() {
    console.log("Component on destroy phase");
  }

  ngAfterContentInit() {
    console.log("component in ngAfterContentInit");
  }

}
