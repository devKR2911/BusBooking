import { HomeComponent } from './home/home.component';
import { BuslistComponent } from './buslist/buslist.component';
import { PaymentComponent } from './payment/payment.component';
import { CancelComponent } from './cancel/cancel.component';


import { Routes, RouterModule } from '@angular/router';
import { TestserService } from './testser.service';
import { RoutrguardService } from './shared/service/routrguard.service';
import { LoginComponent } from './login/login.component';

import { GetComponent }     from './ajaxtest/get/get.component';
import { PostComponent }    from './ajaxtest/post/post.component';
import { ObservableComponent } from './observable/observable.component';

const myAppRoutes:Routes  = [ {path: '', component: HomeComponent},
                              {path: 'home', component: HomeComponent},
                              {path: 'login', component: LoginComponent},
                              {path: 'booking', loadChildren: './booking/booking/booking.module#BookingModule'},
                              {path: 'get', component: GetComponent},
                              {path: 'post', component: PostComponent},
                              {path: 'observable', component: ObservableComponent},
                              {path: '**', redirectTo: ''}]
export const routes = myAppRoutes;


