import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { AuthService } from '..//providers/auth-service';

import { UserModel } from '../../models/user-model';

import { SignUpPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { PrincipalPage } from '../principal/principal';
@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html'
})
export class SignInPage {
    userModel: UserModel;

    constructor(
        public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public authService: AuthService) {
        this.userModel = new UserModel();
    }

    signIn() {
        let loading = this.loadingCtrl.create({
            content: 'Iniciando sesión. Por favor, espere...'
        });
        loading.present();

        this.authService.signInWithEmailAndPassword(this.userModel).then(result => {
            loading.dismiss();

            this.navCtrl.setRoot(PrincipalPage);
        }).catch(error => {
            loading.dismiss();

            console.log(error);
            this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
        });
    }

    signUp() {
        this.navCtrl.push(SignUpPage);
    }

    alert(title: string, message: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }
}