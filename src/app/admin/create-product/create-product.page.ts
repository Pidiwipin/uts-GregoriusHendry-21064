import { Component, OnInit } from '@angular/core';
import {ItemDetailsService} from '../../home/item-details/item-details.service';
import {Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {
  newProduct: FormGroup;
  lastID: number;
  productType: string = null;

  constructor(
      private itemDetailsService: ItemDetailsService,
      private router: Router,
      private toastController: ToastController,
      private alertController: AlertController
  ) { }

  ngOnInit() {
    this.lastID = this.itemDetailsService.getAllProducts().length;
    this.newProduct = new FormGroup({
      productImg: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      productType: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      productName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      productBrand: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      productModel: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      productPrice: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      productStock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      productBaseClock: new FormControl(null, {
        updateOn: 'change'
      }),
      productBoostClock: new FormControl(null, {
        updateOn: 'change'
      }),
      productCore: new FormControl(null, {
        updateOn: 'change'
      }),
      productThread: new FormControl(null, {
        updateOn: 'change'
      }),
      productSpeed: new FormControl(null, {
        updateOn: 'change'
      }),
      productSize: new FormControl(null, {
        updateOn: 'change'
      }),
      productChipset: new FormControl(null, {
        updateOn: 'change'
      }),
      productProcessor: new FormControl(null, {
        updateOn: 'change'
      })
    });
  }

  addProduct(){
    this.itemDetailsService.addProduct(this.lastID, this.newProduct);
    this.router.navigate(['/home']);
    this.addToast();
  }

  async confirmAdd(){
    const alert = await this.alertController.create({
      header: 'Tambah Product',
      message: 'Pastikan data sudah benar, lalu klik lanjut',
      buttons: [
        {
          text: 'Lanjut',
          handler: () => this.addProduct()
        },
        {
          text: 'Kembali',
          role: 'Cancel'
        }
      ]
    });
    await alert.present();
  }

  async addToast(){
    const toast = await this.toastController.create({
      message: 'Produk berhasil ditambahkan!',
      duration: 5000,
      position: 'middle',
      color: 'success'
    });
    toast.present();
  }

}
