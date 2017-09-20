import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductModel } from '../../models/product.model';

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage implements OnInit {
  productData: ProductModel;

  ngOnInit() {
    this.productData = this.navParams.data;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

  onGoToBuy() {
    this.navCtrl.popToRoot();
  }

}
