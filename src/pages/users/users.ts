import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserPage } from './user/user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLoadUser(name) {
    this.navCtrl.push(UserPage, { userName: name });
  }

  // Life cycle
  ionViewCanEnter(): boolean | Promise<void> {
    console.log('IonViewCanEnter');
    const rdm = Math.random();
    return rdm > 0.5;
  }

  ionViewDidLoad() {
    console.log('IonViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('IonViewWillEnter');
  }

  ionViewCanLeave(): boolean | Promise<void> {
    console.log('IonViewCanLeave');
    const promise = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
    return promise;
  }

  ionViewWillLeave() {
    console.log('IonViewWillLeave');
  }
  
  ionViewDidLeave() {
    console.log('IonViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('IonViewWillUnload');
  }
}
