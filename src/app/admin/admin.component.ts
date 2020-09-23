import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TalkWithDbService} from '../talk-with-db.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public talkWithDbService:TalkWithDbService,public router:Router) { }

  addNewProductForAdmin(name,id,type,description,price,image,imagea,imageb,brand)
{
   var obj ={name:name,id:id,type:type,description:description,price:price,image:image,imagea:imagea,imageb:imageb,brand:brand}
   this.talkWithDbService.addNewProductForAdmin(obj).subscribe((data) => {

    console.log(data);
    var tempObj: any = data["message"]

    if (tempObj == true) {
      alert("Successfully Added")
    }


  }, (err) => {
    console.log(err);
  });
}


  ngOnInit(): void {
    if (this.talkWithDbService.usertype=="user" || this.talkWithDbService.loggedInUser!="admin") this.router.navigateByUrl('login') ;
  }

}
