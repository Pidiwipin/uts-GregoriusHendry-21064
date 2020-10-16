import { Component, OnInit } from '@angular/core';
import {Products} from './item.model';
import {ItemDetailsService} from './item-details.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  itemDetails: Products;

  constructor(
      private activatedRoute: ActivatedRoute,
      private itemDetailsService: ItemDetailsService,
      private router: Router,
      private toastController: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productID')){
        return;
      }
      const productID = paramMap.get('productID');
      this.itemDetails = this.itemDetailsService.getProducts(productID);
    });
  }
  deleteProduct(){
    this.itemDetailsService.deleteProduct(this.itemDetails.productID);
    this.router.navigate(['/home']);
    this.showToast();
  }

  async showToast(){
    const toast = await this.toastController.create({
      duration: 5000,
      message: 'Item berhasil dihapus!',
      position: 'middle',
      color: 'success'
    });
    toast.present();
  }
}
