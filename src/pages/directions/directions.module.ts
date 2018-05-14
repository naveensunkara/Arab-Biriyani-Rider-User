import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectionsPage } from './directions';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    DirectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectionsPage),
  ],
  providers: [Geolocation]
})
export class DirectionsPageModule {}
