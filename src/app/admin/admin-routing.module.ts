import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'create-product',
    loadChildren: () => import('./create-product/create-product.module').then( m => m.CreateProductPageModule)
  },
  {
    path: 'edit-product/:productID',
    loadChildren: () => import('./edit-product/edit-product.module').then( m => m.EditProductPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
