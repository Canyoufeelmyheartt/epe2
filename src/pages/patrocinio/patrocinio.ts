import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PrincipalPage } from '../principal/principal';
import * as firebase from 'firebase';
import 'firebase/firestore';
/**
 * Generated class for the PatrocinioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patrocinio',
  templateUrl: 'patrocinio.html',
})
export class PatrocinioPage {
  aporte: any;
  private db: any;
  model: any = {};
  isEditing: boolean = false;

  constructor(public navCtrl: NavController) {
    this.db = firebase.firestore();
     this.loadData();
 }

 loadData(){
  this.getAllDocuments("aporte").then((e)=>{
    this.aporte = e;
});
}

addMessage(){
  if(!this.isEditing){
  this.addDocument("aporte", this.model).then(()=>{
    this.loadData();//refresh view
  });
}else{
  this.updateDocument("aporte", this.model.$key, this.model).then(()=>{
    this.loadData();//refresh view
  });
}
this.isEditing = false;
//clear form
this.model.title = '';
this.model.rut = '';
this.model.telefono = '';
this.model.correo = '';
this.model.monto = '';
this.model.fecha = '';
}

updateMessage(obj){
this.model = obj;
this.isEditing = true;
}

deleteMessage(key){
this.deleteDocument("aporte", key).then(()=>{
  this.loadData();//refresh view
  this.isEditing = false;
});
}





//CRUD operation methods------------------------------------------------------------------------------------------
getAllDocuments(collection: string): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db.collection(collection)
          .get()
          .then((querySnapshot) => {
              let arr = [];
              querySnapshot.forEach(function (doc) {
                  var obj = JSON.parse(JSON.stringify(doc.data()));
                  obj.$key = doc.id
                  console.log(obj)
                  arr.push(obj);
              });

              if (arr.length > 0) {
                  console.log("Document data:", arr);
                  resolve(arr);
              } else {
                  console.log("No such document!");
                  resolve(null);
              }


          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

deleteDocument(collectionName: string, docID: string): Promise<any> {
return new Promise((resolve, reject) => {
    this.db
        .collection(collectionName)
        .doc(docID)
        .delete()
        .then((obj: any) => {
            resolve(obj);
        })
        .catch((error: any) => {
            reject(error);
        });
});
}

addDocument(collectionName: string, dataObj: any): Promise<any> {
return new Promise((resolve, reject) => {
    this.db.collection(collectionName).add(dataObj)
        .then((obj: any) => {
            resolve(obj);
        })
        .catch((error: any) => {
            reject(error);
        });
});
}

updateDocument(collectionName: string, docID: string, dataObj: any): Promise<any> {
return new Promise((resolve, reject) => {
    this.db
        .collection(collectionName)
        .doc(docID)
        .update(dataObj)
        .then((obj: any) => {
            resolve(obj);
        })
        .catch((error: any) => {
            reject(error);
        });
});


}
principal(){
    this.navCtrl.push(PrincipalPage)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatrocinioPage');
  }

}
