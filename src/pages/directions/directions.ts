import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
@IonicPage()
@Component({
  selector: 'page-directions',
  templateUrl: 'directions.html',
})
export class DirectionsPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  riderLocation: any;
  riderMarker: any;
  userLocation: any;
  userMarker: any;
  image = {
    url: '/assets/imgs/pointer-app.png',
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(-23, -25),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(25, 25)
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation, public ngZone: NgZone) {
  }

  ionViewDidLoad() {
    this.loadMap()
  }
  backButtonClick(){
    this.navCtrl.pop();
  }
  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      this.riderLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: this.riderLocation,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.userLocation = new google.maps.LatLng(13.1, 80.3);
      this.userMarker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.userLocation,
        icon: this.image
      });
      this.riderMarker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter(),
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 6,
          strokeColor: '#6b0082',
          fillColor: '#fff',
          fillOpacity: 1
        }
      });
      let riderInfoWindow = new google.maps.InfoWindow();
      riderInfoWindow.setContent("You are here");
      //riderInfoWindow.open(this.map, this.riderMarker);
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer();
      directionsDisplay.setMap(this.map);
      directionsService.route({
        origin: this.riderLocation,
        destination: 'Vadapalani',
        travelMode: 'DRIVING'
      },function(response,status){
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      })
    })
  }

}
