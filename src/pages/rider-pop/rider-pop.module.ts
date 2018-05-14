import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderPopPage } from './rider-pop';

@NgModule({
    declarations: [
        RiderPopPage
    ],
    imports: [
        IonicPageModule.forChild(RiderPopPage)
    ],
    exports: [
        RiderPopPage
    ]
})
export class RiderPopModule { }  