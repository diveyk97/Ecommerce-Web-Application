import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component' ;
import {CheckOutComponent} from './check-out/check-out.component' ;
import {MyCartComponent} from './my-cart/my-cart.component' ;
import {CategoriesComponent} from './categories/categories.component' ;
import {ShirtsComponent} from './shirts/shirts.component' ;
import {TshirtsComponent} from './tshirts/tshirts.component' ;
import {DisplayProductComponent} from './display-product/display-product.component';
import {OrderHistoryComponent} from './order-history/order-history.component' ;
import {AdminComponent} from './admin/admin.component' ;
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'displayProduct',component:DisplayProductComponent},
  {path:'admin',component:AdminComponent},
  {path:'categories',component:CategoriesComponent,
    children:[
      { path:'menshirt',component:ShirtsComponent},
      { path:'womenshirt',component:ShirtsComponent},
      { path:'kidshirt',component:ShirtsComponent},
      { path:'mentshirt',component:ShirtsComponent},
      { path:'womentshirt',component:ShirtsComponent},
      { path:'kidtshirt',component:ShirtsComponent},
      { path:'menshoes',component:ShirtsComponent},
      { path:'kidshoes',component:ShirtsComponent},
      { path:'womenshoes',component:ShirtsComponent},
      { path:'menpant',component:ShirtsComponent},
      { path:'womenpant',component:ShirtsComponent},
      { path:'kidpant',component:ShirtsComponent},
      { path:'menshort',component:ShirtsComponent},
      { path:'womenshort',component:ShirtsComponent},
      { path:'kidshort',component:ShirtsComponent},
      { path:'menpyjama',component:ShirtsComponent},
      { path:'womenpyjama',component:ShirtsComponent},
      { path:'kidpyjama',component:ShirtsComponent}

    ]

  },
  {path:'orderHistory',component:OrderHistoryComponent},
  {path:'login',component:LoginComponent},
  {path:'checkOut',component:CheckOutComponent},
  {path:'myCart1',component:CheckOutComponent},
  {path:'myCart',component:MyCartComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
