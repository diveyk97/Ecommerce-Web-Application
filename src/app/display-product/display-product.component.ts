import { Component, OnInit } from '@angular/core';
import {ManageProductService} from '../manage-product.service' ;
import {TalkWithDbService} from '../talk-with-db.service';
import {Router} from '@angular/router' ;

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {
  displayProduct ;
  quantity =  1 ;
  displayProductSize ;
  usertype ;
  constructor(public manageProductService : ManageProductService,public talkWithDbService:TalkWithDbService,public router:Router ) {
    if (this.talkWithDbService.usertype=="admin") this.usertype = true ;
    else this.usertype = false ;
  }


  showProduct(){
    this.displayProduct = this.manageProductService.productToDisplay ;
  }
  setSizeOfProduct(){
 
   /// console.log(this.displayProductSize) ;
  }
  deleteProductForAdmin(){
      var dataToSend = {
        pid:this.displayProduct.pid,
      } ;
    this.talkWithDbService.deleteProductForAdmin(dataToSend).subscribe((data)=>{
      var tempObj:any = data["message"]  ;
      if (tempObj==true){ 
    this.router.navigateByUrl('categories') ;
      }
    },(err)=>{
  
    }) ;
    
  }
  addToCart(){
    if (this.talkWithDbService.loggedInUser=="") this.router.navigateByUrl('login') ;
    else {
      console.log(this.displayProductSize) ;
      if (this.displayProductSize=='')window.alert("select size") ;
      else {
      var username = this.talkWithDbService.loggedInUser ;
      this.displayProduct.size = this.displayProductSize ;
      var dataToSend = {
        username:username,
        pid:this.displayProduct.pid,
        pname:this.displayProduct.pname,
        brand:this.displayProduct.brand,
        quantity:this.displayProduct.quantity,
        price:this.displayProduct.price,
        type:this.displayProduct.type,
        imgurl:this.displayProduct.imgurl,
        size:this.displayProduct.size
      } ;

      this.talkWithDbService.addToCart(dataToSend).subscribe((data)=>{
        var tempObj:any = data["message"]  ;
        if (tempObj==true){
     
      window.alert("successfully addded to cart") ;
        }
      },(err)=>{
    
      }) ;
     // console.log(dataToSend) ;
    }}
  }




  ngOnInit(): void {
    this.displayProductSize= '' ;
    this.showProduct() ;
  }

}
