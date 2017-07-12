import { Component } from '@angular/core';

/*
  Generated class for the LifeDisplay component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'life-display',
  templateUrl: 'life-display.html',
  
})
export class LifeDisplayComponent {

 private lifeTotal: number;

  constructor() {
      this.lifeTotal = 20;
  }

  public addLife(num): void{
    this.lifeTotal += num;
  }

  public changeLife(num){
    this.lifeTotal += num;
  }

}
