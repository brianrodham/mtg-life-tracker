import { Component } from '@angular/core';

//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 /* private lItems = [];
  private rItems = [];
  private incAmount = 30;*/

  life_total_one = 20;
  life_total_two = 20;

  constructor() {
    /*for (let i = 0; i < this.incAmount; i++) {
      this.lItems.push(i);
      this.rItems.push(i);
    }*/
  }

  /*doLInfinite = (infiniteScroll) => this.doInfinite(infiniteScroll, this.lItems);*/ /* Top life counter */
  /*doRInfinite = (infiniteScroll) => this.doInfinite(infiniteScroll, this.rItems);*/ /* Bottom Life counter */

  /*doInfinite = function (infiniteScroll, items) {
    setTimeout(() => {
      var temp = items.length;
      for (let i = temp; i < temp + this.incAmount; i++) {
        items.push(i);
      }
      infiniteScroll.complete();
    }, 500);
  }*/

}
