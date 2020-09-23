import { Component, OnInit } from '@angular/core';
import {TalkWithDbService} from '../talk-with-db.service' ;
import {ManageProductService} from '../manage-product.service' ;
import {Router} from '@angular/router' ;
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  itemsSavedFromCartToDb ;
  total ;
  totalInclusiveOfGST ;
  username ;
  date:Date ;
  productArray:any = new Array() ;
  constructor(public talkWithDbService:TalkWithDbService,public manageProductService:ManageProductService,public router:Router) { 
    this.total = 0 ;
    this.totalInclusiveOfGST = 0 ;
    this.date= new Date;
  }
  calculateTotal(){
    this.totalInclusiveOfGST = this.total + (0.18*this.total) ;
  }
  findSumOfAllProducts(){
    this.total = 0 ;
    for (var i=0;i<this.productArray.length;i++){
     this.total = this.total + (this.productArray[i].quantity*this.productArray[i].price) ;
    }
  }
  getAllItems(){
    var username = this.talkWithDbService.loggedInUser ;
    var dataToSend = {username:username} ;
    this.talkWithDbService.getAllItemsForCart(dataToSend).subscribe(
      (data)=>{
        
        this.productArray = data  ;
        this.findSumOfAllProducts();
        this.calculateTotal() ;
    },(err)=>{
      console.log(err) ;
    }) 
  }
  deleteFromCart(){
    
    this.talkWithDbService.deleteFromCart({username:this.username}).subscribe((data) => {
      window.alert("Order Placed Successfully ") ;
      this.router.navigateByUrl('home') ;
      }, (err) => {
        console.log(err);
      })
  }
  checkoutEventHandler(fullname,email,Address1,Address2,City,State,zip)
  {
    var obj = {date:this.date,username:this.username,email:email,fullname:fullname,Address1:Address1,Address2:Address2,City:City,State:State,zip:zip,productArray:this.productArray}
  //  console.log("checkout",obj);
    this.talkWithDbService.SaveToOrderHistory(obj).subscribe((data) => {
     
   //   console.log("order placed") ;
      this.deleteFromCart() ;
      }, (err) => {
        console.log(err);
      })
  }


  ngOnInit(): void {
    this.username = this.talkWithDbService.loggedInUser ;
    if (this.username=='')this.router.navigateByUrl('login') ;
    else this.getAllItems() ;
  }

}


