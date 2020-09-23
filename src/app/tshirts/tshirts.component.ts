import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {TalkWithDbService} from '../talk-with-db.service';
import {Router} from '@angular/router';
import {ManageProductService} from '../manage-product.service'

@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.css']
})
export class TshirtsComponent implements OnInit {
  productArray:Product[] = new Array() ;
  constructor(public router: Router,public talkWithDbService:TalkWithDbService,public manageProductService:ManageProductService) { }
  getAllItems(){
    // this.talkWithDbService.getAllShirts(this.manageProductService.shirttype).subscribe(
    //   (data)=>{
    //     this.productArray = data as Product[] ;
    // },(err)=>{
    //   console.log(err) ;
    // }) 
  }
  ngOnInit(): void {
    this.getAllItems();
  }

}
