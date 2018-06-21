import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuslistComponent } from './buslist/buslist.component';
import { PaymentComponent } from './payment/payment.component';


import { Routes, RouterModule } from '@angular/router';
import { routes } from './routes';

import { DataService }      from './shared/service/data.service';
import { RoutrguardService } from './shared/service/routrguard.service';
import { TestserService }   from './testser.service';
import { LoginComponent }   from './login/login.component';
import { HeaderComponent }  from './header/header.component';
import { CancelComponent }  from './cancel/cancel.component';
import { GstPipe }          from './gst.pipe';
import { NgProgressModule } from 'ngx-progressbar';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BookingModule }    from './booking/booking/booking.module';
import { GetComponent }     from './ajaxtest/get/get.component';
import { PostComponent }    from './ajaxtest/post/post.component';

import { HttpService }      from './shared/service/http/http.service';


import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './observable/observable.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    GetComponent,
    PostComponent,
    ObservableComponent,
    AlertComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgProgressModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    RoutrguardService,
    TestserService,
    HttpService,
    AlertService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
