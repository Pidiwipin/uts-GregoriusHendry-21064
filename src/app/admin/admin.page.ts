import { Component, OnInit } from '@angular/core';
import {AlertController, IonItemSliding, MenuController, ToastController} from '@ionic/angular';
import {ItemDetailsService} from '../home/item-details/item-details.service';
import {Products} from '../home/item-details/item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  products: Products[];
  constructor(
      private menuControl: MenuController,
      private itemDetailsService: ItemDetailsService,
      private alertController: AlertController,
      private toastController: ToastController,
      private router: Router
  ) { }
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.products = this.itemDetailsService.getAllProducts();
  }
  delete(productID: string){
    this.itemDetailsService.deleteProduct(productID);
    this.router.navigate(['/home']);
  }

  async showAlert(products: string){
    const alert = await this.alertController.create({
      header: 'Hapus Produk',
      backdropDismiss: true,
      message: 'Produk yang dihapus tidak dapat dikembalikan kembali. Lanjutkan?',
      buttons: [
        {
          text: 'Ya',
          handler: () => this.delete(products)
        },
        {
          text: 'Batal',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }
}
