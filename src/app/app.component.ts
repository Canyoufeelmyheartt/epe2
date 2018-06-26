import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignInPage } from '../pages/signin/signin';
import { SignUpPage } from '../pages/signup/signup';
import { PrincipalPage } from '../pages/principal/principal';
import { DatosPage } from '../pages/datos/datos';
import { PatrocinioPage } from '../pages/patrocinio/patrocinio';

import { AuthService } from '../pages/providers/auth-service';

@Component({
  templateUrl: 'app.html'
})  
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, authService: AuthService) {
    if (authService.authenticated) {
      this.rootPage = SignInPage;
  } else {
      this.rootPage = HomePage;
  }


    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

