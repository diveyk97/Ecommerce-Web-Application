import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import {HttpClientModule} from "@angular/common/http" ;
import {TalkWithDbService} from "./talk-with-db.service";
import { CategoriesComponent } from './categories/categories.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import {ManageProductService} from './manage-product.service';
import { DisplayProductComponent } from './display-product/display-product.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminComponent } from './admin/admin.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MyCartComponent,
    CheckOutComponent,
    CategoriesComponent,
    ShirtsComponent,
    TshirtsComponent,
    DisplayProductComponent,
    OrderHistoryComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TalkWithDbService,ManageProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
