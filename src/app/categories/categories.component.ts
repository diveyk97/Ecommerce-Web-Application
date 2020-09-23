import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import {ManageProductService} from '../manage-product.service' ;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 
  constructor(public router:Router,public manageProductService:ManageProductService) {
    
   }
  getShirts(id){
    
    this.manageProductService.producttype = id ;
    if (id=="menshirt") this.router.navigateByUrl('categories/menshirt') ;
    else if (id=="womenshirt") this.router.navigateByUrl('categories/womenshirt') ;
    else this.router.navigateByUrl('categories/kidshirt') ;
    
  }
  getTShirts(id){
    this.manageProductService.producttype = id ;
    if (id=="mentshirt") this.router.navigateByUrl('categories/mentshirt') ;
    else if (id=="womentshirt") this.router.navigateByUrl('categories/womentshirt') ;
    else this.router.navigateByUrl('categories/kidtshirt') ;
   
   }
   getShoes(id){
    this.manageProductService.producttype = id ;
    if (id=="menshoes") this.router.navigateByUrl('categories/menshoes') ;
    else if (id=="womenshoes") this.router.navigateByUrl('categories/womenshoes') ;
    else this.router.navigateByUrl('categories/kidshoes') ;
   }
   getPants(id){
    this.manageProductService.producttype = id ;
    if (id=="menpant") this.router.navigateByUrl('categories/menpant') ;
    else if (id=="womenpant") this.router.navigateByUrl('categories/womenpant') ;
    else this.router.navigateByUrl('categories/kidpant') ;
   }
   getShorts(id){
    this.manageProductService.producttype = id ;
    if (id=="menshort") this.router.navigateByUrl('categories/menshort') ;
    else if (id=="womenshort") this.router.navigateByUrl('categories/womenshort') ;
    else this.router.navigateByUrl('categories/kidshort') ;
   }
   getPyjamas(id){
    this.manageProductService.producttype = id ;
    if (id=="menpyjama") this.router.navigateByUrl('categories/menpyjama') ;
    else if (id=="womenpyjama") this.router.navigateByUrl('categories/womenpyjama') ;
    else this.router.navigateByUrl('categories/kidpyjama') ;
   }
  ngOnInit(): void {
    
  }

}
