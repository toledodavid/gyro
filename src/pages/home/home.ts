import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any;
  subscription:any;

  constructor(public navCtrl: NavController, private deviceMotion: DeviceMotion) {
    
  }

  activar(){
    var options: DeviceMotionAccelerometerOptions = {
      frequency: 500
    };

    this.subscription = this.deviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.data = acceleration;
    });
  }

  desactivar(){
    this.subscription.usubscribe();
  }

}
