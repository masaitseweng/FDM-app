import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sendemailwithquote',
  templateUrl: 'sendemailwithquote.html',
})
export class SendemailwithquotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendemailwithquotePage');
  }

}
