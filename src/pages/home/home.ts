import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usrsPage = UsersPage;
  shopPage = ShopPage;
  constructor(public navCtrl: NavController) {

  }

  onGoToUsers() {
    this.navCtrl.push(this.usrsPage).catch((err) => console.log('Access denied, Agrument was ' + err));
  }

  onGoToShop() {
    this.navCtrl.push(ShopPage);
  }
}
