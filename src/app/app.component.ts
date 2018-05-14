import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform, Events } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings, ShareService } from '../providers';

@Component({
  template: `<ion-menu [content]="content" [swipeEnabled]="swipe" persistent="true">
    <ion-header>
      <ion-toolbar text-center>
        <ion-title>Arab St Biriyani</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" [attr.indicate]="p.class">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;
  swipe: boolean = false;
  @ViewChild(Nav) nav: Nav;

  branch: any[] = [
    { title: 'Menu', component: 'MenuPage', class: 'inactive' },
    { title: 'My Orders', component: 'OrderPage', class: 'inactive' },
    { title: 'Payment History', component: 'PaymentHistoryPage', class: 'inactive' },
    { title: 'My Account', component: 'AccountPage', class: 'inactive' },
    { title: 'Notification', component: 'NotificationPage', class: 'inactive' },
    { title: 'Chat', component: 'ChatPage', class: 'inactive' },
    { title: 'Support', component: 'KitchenOrdersPage', class: 'inactive' },
    { title: 'Log Out', component: 'LoginPage', class: 'inactive' }
  ];
  
  riderBranch: any[] = [
    { title: 'Delivery Orders', component: 'RiderDeliveryPage', class: 'inactive' },
    { title: 'Manage Vessels', component: 'VesselsPage', class: 'inactive' },
    { title: 'My Account', component: 'AccountPage', class: 'inactive' },
    { title: 'Notification', component: 'NotificationPage', class: 'inactive' },
    { title: 'Log Out', component: 'LoginPage', class: 'inactive' }
  ];
  
  riderUser: any[] = [
    { title: 'Assigned Orders', component: 'RiderUserPage', class: 'inactive' },
    { title: 'My Account', component: 'AccountPage', class: 'inactive' },
    { title: 'Notification', component: 'NotificationPage', class: 'inactive' },
    { title: 'Log Out', component: 'LoginPage', class: 'inactive' }
  ];
  //pages: any[] = this[this.share.getUser()];
  pages: any[] = this.riderUser;
  
  constructor(platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen, private share: ShareService, events: Events) {
    //this.pages[0].class = 'active';
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#5c0070');
      this.splashScreen.hide();
    });
    events.subscribe('shareObject', (dummy, dummyNumber) => {
      console.log('Welcome', dummy, 'at', dummyNumber);
    });
  }
openPage(page) {
  // Reset the content nav to have just this page
  // we wouldn't want the back button to show in this scenario
  this.pages.forEach((element, index) => {
    if (element === page) {
      this.pages[index].class = 'active';
    }
    else {
      this.pages[index].class = 'inactive';
    }
  });
  this.nav.setRoot(page.component);
}
}
