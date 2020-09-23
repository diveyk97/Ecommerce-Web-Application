import { Component, OnInit } from '@angular/core';
import {TalkWithDbService} from '../talk-with-db.service';
import {Router,NavigationEnd} from '@angular/router';
import {Product} from '../product' ;
import {ManageProductService} from '../manage-product.service' ;

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  productArray:any = new Array() ;
  currentRoute: string;
  itemsSavedFromCartToDb:boolean ;
  constructor(public router: Router,public talkWithDbService:TalkWithDbService,public manageProductService:ManageProductService) { 
    this.itemsSavedFromCartToDb = false ;
    this.currentRoute = router.url ;
  //  console.log(this.currentRoute) ;

  }

  getAllItems(){
    var username = this.talkWithDbService.loggedInUser ;
    var dataToSend = {username:username} ;
    this.talkWithDbService.getAllItemsForCart(dataToSend).subscribe(
      (data)=>{
        this.productArray = data  ;
     
    },(err)=>{
      console.log(err) ;
    }) 
  }
  removeItem(product){
    var index =0 ;
    for (var i=0;i<this.productArray.length;i++){
      if (this.productArray[i].pid==product.pid){
        index = i ;
        break ;
      }
    }
    this.productArray.splice(index,1) ;
    if (this.currentRoute=='myCart')this.router.navigateByUrl('myCart1') ;
    else this.router.navigateByUrl('myCart') ;
  }
  saveItemsToCart(){
    var dataToSend = {username:this.talkWithDbService.loggedInUser,productArr:this.productArray} ;
    this.talkWithDbService.saveItemsToCart(dataToSend).subscribe((data)=>{
      if (data['message']==true){
       if (this.itemsSavedFromCartToDb==true) this.router.navigateByUrl('checkOut') ;
      }
    },(err)=>{
      console.log(err) ;
    }) 
  }
  goToCheckOut(){
    this.itemsSavedFromCartToDb = true ;
    this.saveItemsToCart() ;
    // this.router.navigateByUrl('checkOut') ;
  }
  setQuantity(obj,modifiedQuantity){
  //  console.log(obj,modifiedQuantity) ;
    for (var i=0;i<this.productArray.length;i++){
      if (this.productArray[i].pid==obj.pid){
        this.productArray[i].quantity = modifiedQuantity ;
        break ;
      }
    }
  }
  ngOnInit(): void {
    this.getAllItems() ;
  }
  ngOnDestroy():void{
    if (this.itemsSavedFromCartToDb==false)
    this.saveItemsToCart() ;
  }

}
