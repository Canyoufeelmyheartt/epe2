import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DatosPage } from '../datos/datos';
/**
 * Generated class for the AdoptarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adoptar',
  templateUrl: 'adoptar.html',
})
export class AdoptarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  datos(){
    this.navCtrl.push(DatosPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdoptarPage');
  }

}
