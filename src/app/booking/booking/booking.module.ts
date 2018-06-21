import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BuslistComponent } from '../../buslist/buslist.component';
import { PaymentComponent } from '../../payment/payment.component';
import { RoutrguardService } from '../../shared/service/routrguard.service';
import { CancelComponent } from '../../cancel/cancel.component';
import { FormsModule } from '@angular/forms';
import { GstPipe } from '../../gst.pipe';
import { BookingComponent } from './booking.component';

const childRoutes: Routes = [{path: '', component: BookingComponent, children: [
  {path: 'busList', component: BuslistComponent},
  {path: 'payment', component: PaymentComponent,canActivate:[RoutrguardService]},
  {path: 'cancelTickets', component: CancelComponent,canActivate:[RoutrguardService]},
]}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
    FormsModule,
  ],
  declarations: [
    BuslistComponent,
    PaymentComponent,
    CancelComponent,
    GstPipe,
    BookingComponent
  ]
})
export class BookingModule { }
