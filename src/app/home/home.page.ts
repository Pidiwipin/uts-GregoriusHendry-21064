import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {ItemDetailsService} from './item-details/item-details.service';
import {Products} from './item-details/item.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  products: Products[];
  gridList = true;
  constructor(
      private menuControl: MenuController,
      private itemDetailsService: ItemDetailsService
  ) {}

  GridList(){
    if (this.gridList){
      this.gridList = false;
    }
    else {
      this.gridList = true;
    }
  }
  ngOnInit() {
    this.products = this.itemDetailsService.getAllProducts();
  }
  ionViewWillEnter(){
    this.products = this.itemDetailsService.getAllProducts();
  }

}
