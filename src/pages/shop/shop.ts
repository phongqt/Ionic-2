import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';
import { ProductModel } from '../../models/product.model';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  onBuy(productData: ProductModel) {
    this.navCtrl.push(BuyoutPage, productData, {
      duration: 200,
      easing: 'ease-out'});
  }
}
