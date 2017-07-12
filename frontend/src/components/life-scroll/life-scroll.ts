import { Component } from '@angular/core';

/*
  Generated class for the LifeScroll component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'life-scroll',
  templateUrl: 'life-scroll.html',
})
export class LifeScrollComponent {

  private lifeArray = [];
  private incAmount = 30;

  constructor() {
    for (let i = 0; i < this.incAmount; i++) {
      this.lifeArray.push(i);
    }
   // console.log(this.lifeArray);
  }

  doInfinite = function (infiniteScroll) {
    setTimeout(() => {
      var temp = this.lifeArray.length;
      for (let i = temp; i < temp + this.incAmount; i++) {
        this.lifeArray.push(i);
      }
      infiniteScroll.complete();
    }, 500);
  }


}
