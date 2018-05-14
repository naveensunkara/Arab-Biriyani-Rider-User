import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderOrderSummaryUserPage } from './rider-order-summary-user';

@NgModule({
    declarations: [
        RiderOrderSummaryUserPage
    ],
    imports: [
        IonicPageModule.forChild(RiderOrderSummaryUserPage)
    ],
    exports: [
        RiderOrderSummaryUserPage
    ]
})
export class RiderOrderSummaryUserPageModule { }   