import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignInPage } from '../signin/signin';
import { PatrocinioPage } from '../patrocinio/patrocinio';
import { DatosPage } from '../datos/datos';
import { AdoptarPage } from '../adoptar/adoptar';
import { AuthService } from '..//providers/auth-service';
import { HomePage } from '../home/home';
import 'firebase/firestore';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  messages: any;
  private db: any;
  model: any = {};
  isEditing: boolean = false;



  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  signOut() {
    this.authService.signOut();
    this.navCtrl.setRoot(SignInPage);
 

  }
  patrocinio(){
    this.navCtrl.push(PatrocinioPage)
  }
  datos(){
    this.navCtrl.push(DatosPage)
  }
  adoptar(){
    this.navCtrl.push(AdoptarPage)
  }
  home(){
    this.navCtrl.push(HomePage)
  }
}
