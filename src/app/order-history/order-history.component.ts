import { Component, OnInit } from '@angular/core';
import {ManageProductService} from '../manage-product.service' ;
import {TalkWithDbService} from '../talk-with-db.service' ;
import {Router} from '@angular/router' ;

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  username ;
  orderHistory:any ;
  TotalOfProduct ;
  constructor(public router:Router,public manageProductService:ManageProductService,public talkWithDbService:TalkWithDbService ) { }
  getOrderHistory(){
    var username = this.talkWithDbService.loggedInUser ;
    var dataToSend = {username:username} ;
    this.talkWithDbService.getOrderHistory(dataToSend).subscribe(
      (data)=>{
        this.orderHistory = data  ;
      //  console.log(this.orderHistory) ;
     
    },(err)=>{
      console.log(err) ;
    })
  }
  calulateTotalOfProduct(product){
    this.TotalOfProduct = 0 ;
    console.log(product.length) ;
    for (var i=0;i<product.length;i++){
    
     
      this.TotalOfProduct = this.TotalOfProduct+ ( product[i].quantity*product[i].price) ;
    }
  }
  ngOnInit(): void {
    // if (this.talkWithDbService.loggedInUser==''){
    //   this.router.navigateByUrl('login') ;
    // }else{
      this.getOrderHistory() ;
    // }
  }

}
