import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {TalkWithDbService} from '../talk-with-db.service';
import {Router} from '@angular/router';
import {ManageProductService} from '../manage-product.service'
@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
  productArray:any = new Array() ;
  constructor(public router: Router,public talkWithDbService:TalkWithDbService,public manageProductService:ManageProductService) { 
      
  }
  getAllItems(){
    var data = {
      type:this.manageProductService.producttype
    }
    this.talkWithDbService.getAllShirts(data).subscribe(
      (data)=>{
        this.productArray = data as any;
       
    },(err)=>{
      console.log(err) ;
    }) 
  }
  showProductDetails(obj){
    this.manageProductService.productToDisplay = obj ;
    this.router.navigateByUrl("displayProduct") ;
  }
  ngOnInit(): void {
    this.getAllItems();
  }

}
