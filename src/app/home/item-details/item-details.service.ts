import { Injectable } from '@angular/core';
import { Products} from './item.model';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {
  private products: Products[] = [
    {
      productID: '1',
      productName: 'Intel Core i7',
      productType: 'CPU',
      productImg: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/11/17/15119124/15119124_e05afd1a-b7ab-4777-9ec0-1ffba82fbf47_600_600.jpg',
      productBrand: 'Intel',
      productModel: '7700K',
      productPrice: 5000000,
      productStock: 6,
      productDescription: {
        productBaseClock: '4.2 GHz',
        productBoostClock: '4.5 Ghz',
        productCore: '4 Cores',
        productThread: '8 Threads',
        productChipset: '',
        productSpeed: '',
        productSize: '',
        productProcessor: ''
      }

    },
    {
      productID: '2',
      productName: 'MSI GEFORCE® GTX 1650 SUPER',
      productType: 'GPU',
      productImg: 'https://static.bmdstatic.com/pk/product/medium/5e1d6f3cb5da6.jpg',
      productBrand: 'Nvidia',
      productModel: 'MSI GeForce GTX 1650 Super Gaming X 4 GB',
      productPrice: 4100000,
      productStock: 11,
      productDescription: {
        productBaseClock: '',
        productBoostClock: '',
        productCore: '',
        productThread: '',
        productChipset: '',
        productSpeed: '',
        productSize: '',
        productProcessor: ''
      }
    },
    {
      productID: '3',
      productName: 'Corsair DDR4 Vengeance RGB Pro',
      productType: 'RAM',
      productImg: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/11/23/44170746/44170746_f94ba446-71c0-4ab1-b8b9-f1160f8441d7_1000_641.png',
      productBrand: 'Corsair',
      productModel: 'Corsair DDR4 Vengeance RGB Pro',
      productPrice: 1800000,
      productStock: 10,
      productDescription: {
        productBaseClock: '',
        productBoostClock: '',
        productCore: '',
        productThread: '',
        productChipset: '',
        productSpeed: '3200MHz',
        productSize: '2x8GB',
        productProcessor: ''
      }
    },
    {
      productID: '4',
      productName: 'MSI B450M PRO VDH MAX',
      productType: 'Motherboard',
      productImg: 'https://asset.msi.com/resize/image/global/product/product_6_20190708134634_5d22d8bac2965.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
      productBrand: 'MSI',
      productModel: 'MSI B450M PRO VDH MAX',
      productPrice: 1500000,
      productStock: 44,
      productDescription: {
        productBaseClock: '',
        productBoostClock: '',
        productCore: '',
        productThread: '',
        productChipset: 'B450',
        productSpeed: '',
        productSize: '',
        productProcessor: 'AMD AM4'
      }
    }
  ];

  constructor() { }

  getAllProducts() {
    return [...this.products];
  }

  getProducts(productID: string){
    return this.products.find(products => {
      return products.productID === productID;
    });
  }
  deleteProduct(productID){
    this.products = this.products.filter(products => {
      return products.productID !== productID;
    });
  }
  addProduct(productID, data: FormGroup){
    const newID = productID + 1;
    const pushData = {
      productID: newID.toString(),
      productType: data.value.productType,
      productName: data.value.productName,
      productPrice: data.value.productPrice,
      productStock : data.value.productStock,
      productImg: data.value.productImg,
      productBrand: data.value.productBrand,
      productModel: data.value.productModel,
      productDescription: {
        productBaseClock: data.value.productBaseClock,
        productBoostClock : data.value.productBoostClock,
        productCore : data.value.productCore,
        productThread : data.value.productThread,
        productSpeed : data.value.productSpeed,
        productSize : data.value.productSize,
        productChipset : data.value.productChipset,
        productProcessor : data.value.productProcessor,
      }
    };
    this.products.push(pushData);
  }
  // tslint:disable-next-line:max-line-length
  editProduct(productID, productImg, productName, productBrand, productModel, productPrice, productStock, productBaseClock, productBoostClock, productCore, productThread, productSpeed, productSize, productChipset, productProcessor){
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.products.length; i++){
      if (this.products[i].productID === productID){
        this.products[i].productImg = productImg;
        this.products[i].productName = productName;
        this.products[i].productBrand = productBrand;
        this.products[i].productModel = productModel;
        this.products[i].productPrice = productPrice;
        this.products[i].productStock = productStock;
        this.products[i].productDescription.productBaseClock = productBaseClock;
        this.products[i].productDescription.productBoostClock = productBoostClock;
        this.products[i].productDescription.productCore = productCore;
        this.products[i].productDescription.productThread = productThread;
        this.products[i].productDescription.productSpeed = productSpeed;
        this.products[i].productDescription.productSize = productSize;
        this.products[i].productDescription.productChipset = productChipset;
        this.products[i].productDescription.productProcessor = productProcessor;
      }
    }
  }
}
