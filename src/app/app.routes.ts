import { Routes } from '@angular/router';
import { CarShopComponent } from './car-shop/car-shop.component';
import { ProductTableComponentComponent } from './product-table-component/product-table-component.component';

export const routes: Routes = [
   {path:"", component: ProductTableComponentComponent},
   {path: 'car-shop', component: CarShopComponent}
];
