import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PatrocinioPage } from '../pages/patrocinio/patrocinio';
import { DatosPage } from '../pages/datos/datos';
import { SignInPage } from '../pages/signin/signin';
import { SignUpPage } from '../pages/signup/signup';
import { PrincipalPage } from '../pages/principal/principal';
import { AdoptarPage } from '../pages/adoptar/adoptar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../pages/providers/auth-service';


export const firebaseConfig = {
  apiKey: "AIzaSyCR2iQJB_pgWnCV1LLuzg4KTtYs9v64RTA",
  authDomain: "epe2-e2bdd.firebaseapp.com",
  databaseURL: "https://epe2-e2bdd.firebaseio.com",
  projectId: "epe2-e2bdd",
  storageBucket: "epe2-e2bdd.appspot.com",
  messagingSenderId: "731734526442"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignInPage,
    SignUpPage,
    PrincipalPage,
    DatosPage,
    PatrocinioPage,
    AdoptarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignInPage,
    SignUpPage,
    PrincipalPage,
    DatosPage,
    PatrocinioPage,
    AdoptarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
