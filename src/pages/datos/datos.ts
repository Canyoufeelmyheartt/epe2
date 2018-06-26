import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PrincipalPage } from '../principal/principal';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { from } from 'rxjs/observable/from';

@IonicPage()
@Component({
  selector: 'page-datos',
  templateUrl: 'datos.html',
})
export class DatosPage {
    adoptar: any;
    private db: any;
    model: any = {};
    isEditing: boolean = false;
    
  constructor(public navCtrl: NavController) {
     this.db = firebase.firestore();
      this.loadData();
  }

  loadData(){
    this.getAllDocuments("adoptar").then((e)=>{
      this.adoptar = e;
  });
  }

addAdoptar(){
    if(!this.isEditing){
    this.addDocument("adoptar", this.model).then(()=>{
      this.loadData();//refresh view
    });
  }else{
    this.updateDocument("adoptar", this.model.$key, this.model).then(()=>{
      this.loadData();//refresh view
    });
  }
  this.isEditing = false;
  //clear form
  this.model.title = '';
  this.model.correo = '';
  this.model.text = '';
}

updateAdoptar(obj){
  this.model = obj;
  this.isEditing = true;
}

deleteAdoptar(key){
  this.deleteDocument("adoptar", key).then(()=>{
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
    console.log('ionViewDidLoad DatosPage');
  }

 
}


