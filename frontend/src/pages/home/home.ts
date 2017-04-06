import { Component } from '@angular/core';

//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private lItems = [];
  private rItems = [];
  private incAmount = 30;


  constructor() {
    for (let i = 0; i < this.incAmount; i++) {
      this.lItems.push(i);
      this.rItems.push(i);
    }
  }

doLInfinite = (infiniteScroll) => this.doInfinite(infiniteScroll, this.lItems);
doRInfinite = (infiniteScroll) => this.doInfinite(infiniteScroll, this.rItems);

doInfinite = function (infiniteScroll, items) {
  console.log('Begin async operation');
    setTimeout(() => {
      var temp = items.length;
      for (let i = temp; i < temp + this.incAmount; i++) {
        items.push(i);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);

 /* return function (items) {
    console.log('Begin async operation');
    setTimeout(() => {
      var temp = this.items.length;
      for (let i = temp; i < temp + this.incAmount; i++) {
        this.items.push(i);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }*/
}


  /*doLInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      var temp = this.lItems.length;
      for (let i = temp; i < temp + this.incAmount; i++) {
        this.lItems.push(i);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

    doRInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      var temp = this.rItems.length;
      for (let i = temp; i < temp + this.incAmount; i++) {
        this.rItems.push(i);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }*/
}
