import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'page-rider-pop',
    templateUrl: 'rider-pop.html'
})

export class RiderPopPage {
    constructor(public viewCtrl: ViewController){}
    close() {
        this.viewCtrl.dismiss();
      }
}
