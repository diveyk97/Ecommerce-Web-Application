import { Component } from '@angular/core';
import {Router} from '@angular/router' ;
import{TalkWithDbService} from '../app/talk-with-db.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  username ;
  constructor(public router:Router,public talkWithServer:TalkWithDbService){
    this.username = '' ;
  }
  goToCart(){
   if (this.talkWithServer.loggedInUser!=''){
     this.username= this.talkWithServer.loggedInUser ;
    this.router.navigateByUrl('myCart') ;
   }else {
    this.router.navigateByUrl('login') ;
   }
  }
  goToHome(){
    if (this.talkWithServer.loggedInUser=="admin"){
      this.router.navigateByUrl('admin') ;
    }
    else 
    this.router.navigateByUrl('home') ;

  }
  goToCategories(){
    this.router.navigateByUrl('categories') ;
  }
  goToLogin(){
    if (this.talkWithServer.loggedInUser!=''){
      this.router.navigateByUrl('categories') ;
     }else {
      this.router.navigateByUrl('login') ;
     }
  }
  goToOrderHistory(){
    if (this.talkWithServer.loggedInUser!=''){
      this.router.navigateByUrl('orderHistory') ;
     }else {
      this.router.navigateByUrl('login') ;
     }

  }
}

