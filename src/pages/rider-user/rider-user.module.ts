import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderUserPage } from './rider-user';

@NgModule({
    declarations: [
        RiderUserPage
    ],
    imports: [
        IonicPageModule.forChild(RiderUserPage)
    ],
    exports: [
        RiderUserPage
    ]
})
export class RiderUserModule {
    
 }   