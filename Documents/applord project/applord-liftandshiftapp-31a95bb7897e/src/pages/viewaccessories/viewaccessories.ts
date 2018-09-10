import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SendemailaccessoriesPage} from '../sendemailaccessories/sendemailaccessories';

@IonicPage()
@Component({
  selector: 'page-viewaccessories',
  templateUrl: 'viewaccessories.html',
})
export class ViewaccessoriesPage {

  object:any
  Accessories:any
  sumtotal:any
  vat:any
  finalTotal:any

  name:any
  subTotal:any
  price:any
  installations:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.installations =  navParams.get('installation')  
    console.log("inst",this.installations)

    this.object = navParams.get('object')
    console.log("1",this.object)

    this.name = this.object[0].name
    this.price =  Number.parseFloat(this.object[0].RawCranePrice).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")



   

    this.Accessories = navParams.get('Accessories')
    console.log("2", this.Accessories)

    this.sumtotal  = navParams.get('sumtotal')
   
    console.log("3", this.sumtotal)
    this.sumtotal = Number.parseFloat(this.sumtotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
       


    this.subTotal = Number.parseFloat(this.subTotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
        
 

    this.vat = navParams.get('vat')
    this.vat = Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
        
    console.log("4", this.vat)

    this.finalTotal = navParams.get('finalTotal')
    this.finalTotal = Number.parseFloat(this.finalTotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
        
    console.log("5", this.finalTotal)
 
  }

  emailQuote(){

    this.navCtrl.push(SendemailaccessoriesPage,{
    
    object:this.object,
    Accessories:this.Accessories,
    installations:this.installations,
    sumtotal:this.sumtotal,
    vat:this.vat,
    subTotal:this.subTotal,
    finalTotal:this.finalTotal 
    })
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewaccessoriesPage');
  }

}
