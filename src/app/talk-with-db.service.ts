import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class TalkWithDbService {
  loggedInUser:string ;
  usertype:string ;
  myBaseServerUrl =  environment.serverUrl ;
  constructor(public httpClient:HttpClient) {
    this.loggedInUser = "" ;
   }
  doUserValidation(obj){
    var myServerUrl = this.myBaseServerUrl + "api/login" ;
    return this.httpClient.post(myServerUrl,obj) ;
  }
  deleteProductForAdmin(obj){
    var myServerUrl = this.myBaseServerUrl + "api/deleteProductForAdmin" ;
    return this.httpClient.post(myServerUrl,obj) ;
  }
  registerUser(obj){
    var myServerUrl = this.myBaseServerUrl + "api/userRegister" ;
    return this.httpClient.post(myServerUrl,obj) ;
  }
  getAllItemsForCart(obj){
    var myServerUrl = this.myBaseServerUrl + "api/getAllItemsForCart" ;
    return this.httpClient.post(myServerUrl,obj) ;
  }
  getAllShirts(obj){
   
    var myServerUrl = this.myBaseServerUrl + "api/getAllShirts" ; 
    return this.httpClient.post(myServerUrl,obj) ;
  }
  addToCart(obj){
    var myServerUrl = this.myBaseServerUrl + "api/addToCart" ;
    return this.httpClient.post(myServerUrl,obj) ;
  }
  saveItemsToCart(obj){
    var myServerUrl = this.myBaseServerUrl + "api/saveItemsToCart" ;
   
    return this.httpClient.post(myServerUrl,obj) ;
  }
  SaveToOrderHistory(obj){
    var myServerUrl = this.myBaseServerUrl + "api/SaveToOrderHistory" ;
 
    return this.httpClient.post(myServerUrl,obj) ;
  }
  deleteFromCart(obj){
    var myServerUrl = this.myBaseServerUrl + "api/deleteFromCart" ;
 
    return this.httpClient.post(myServerUrl,obj) ;
  }
  getOrderHistory(obj){
    var myServerUrl = this.myBaseServerUrl + "api/getOrderHistory" ;
 
    return this.httpClient.post(myServerUrl,obj) ;
  }
  addNewProductForAdmin(obj){
    var myServerUrl = this.myBaseServerUrl + "api/addNewProductForAdmin" ;
 
    return this.httpClient.post(myServerUrl,obj) ;
  }
}
