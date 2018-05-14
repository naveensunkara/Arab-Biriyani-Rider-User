import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-rider-order-summary-user',
    templateUrl: 'rider-order-summary-user.html'
})

export class RiderOrderSummaryUserPage {
    item: any = {
        order: 'Order # 1100012',
        branch: 'Pasiris',
        quantity: '280',
        vessels: '9',
        phone: '+65 6589 5489',
        address: '414 Baleser Road Singapore 329806'
    }
    constructor(public navCtrl: NavController, public toast: ToastController){}
    slider(type){
        if(this.item.sliderMargin == undefined || this.item.sliderMargin == '-130px -16px 0'){
            this.item.sliderContent = true;
            this.item.sliderMargin = '0 -16px 0';
            this.item.sliderType = type;
        }
        else{
            this.item.sliderMargin = '-130px -16px 0';
        }
    }
    presentToast() {
        let toast = this.toast.create({
          message: 'Delivery successfully',
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.navCtrl.push('RiderDeliveryPage');
      }
}