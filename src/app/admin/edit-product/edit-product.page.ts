import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemDetailsService} from '../../home/item-details/item-details.service';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  itemDetails;
  editProductName: string;
  editProductImg: string;
  editProductType: string;
  editProductBrand: string;
  editProductModel: string;
  editProductPrice: number;
  editProductStock: number;
  editProductBaseClock: string;
  editProductBoostClock: string;
  editProductCore: string;
  editProductThread: string;
  editProductSpeed: string;
  editProductSize: string;
  editProductChipset: string;
  editProductProcessor: string;

  constructor(
      private activatedRoute: ActivatedRoute,
      private itemDetailsService: ItemDetailsService,
      private router: Router,
      private alertController: AlertController,
      private toastController: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('productID')){
        const id = paramMap.get('productID');
        this.itemDetails = this.itemDetailsService.getProducts(id);
        this.editProductImg = this.itemDetails.productImg;
        this.editProductName = this.itemDetails.productName;
        this.editProductBrand = this.itemDetails.productBrand;
        this.editProductModel = this.itemDetails.productModel;
        this.editProductPrice = this.itemDetails.productPrice;
        this.editProductStock = this.itemDetails.productStock;
        this.editProductBaseClock = this.itemDetails.productBaseClock;
        this.editProductBoostClock = this.itemDetails.productBoostClock;
        this.editProductCore = this.itemDetails.productCore;
        this.editProductThread = this.itemDetails.productThread;
        this.editProductSpeed = this.itemDetails.productSpeed;
        this.editProductSize = this.itemDetails.productSize;
        this.editProductChipset = this.itemDetails.productChipset;
        this.editProductProcessor = this.itemDetails.productProcessor;
      }else{
        return;
      }
    });
  }

  editProduct(){
    this.itemDetailsService.editProduct(
        this.itemDetails.productID,
        this.editProductImg,
        this.editProductName,
        this.editProductBrand,
        this.editProductModel,
        this.editProductPrice,
        this.editProductStock,
        this.editProductBaseClock,
        this.editProductBoostClock,
        this.editProductCore,
        this.editProductThread,
        this.editProductSpeed,
        this.editProductSize,
        this.editProductChipset,
        this.editProductProcessor
    );
    this.router.navigate(['/home']);
    this.editToast();
  }

  async confirmEdit() {
    const alert = await this.alertController.create({
      header: 'Konfirmasi perubahan',
      message: 'Simpan perubahan?',
      buttons: [
        {
          text: 'Ya!',
          handler: () => this.editProduct()
        },
        {
          text: 'Batalkan',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

  async editToast() {
    const toast = await this.toastController.create({
      message: 'Berhasil mengubah produk!',
      duration: 5000,
      color: 'success'
    });

  }

}
