import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router'
import {TalkWithDbService} from '../talk-with-db.service'
import {ReactiveFormsModule} from '@angular/forms'
import { environment } from 'src/environments/environment';

import {Md5} from 'ts-md5/dist/md5';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm:FormGroup ;
  userValidationFailMessage:string ;
  registeredUser:String ;
  registerForm:FormGroup ;
  password:string ;
  constructor(public router: Router,public talkWithDbService:TalkWithDbService) {
    this.registeredUser = "" ;
    this.logInForm = new FormGroup({
      username:new FormControl("",Validators.required),
      passWord:new FormControl("",Validators.required)
    }) ;
    this.registerForm = new FormGroup({
      username:new FormControl("",Validators.required),
      mailId:new FormControl("",Validators.email),
      passWord:new FormControl("",[Validators.required,Validators.minLength(8)]),
      cpassWord:new FormControl("",[Validators.required,Validators.minLength(8)]),
      mobilePhone:new FormControl("",[Validators.required,Validators.pattern(/[0-9]{10}/),Validators.maxLength(10)])

    },{validators: this.MustMatch }
    )
   }
   private MustMatch(form: FormGroup) {
   
    return form.get('passWord').value === form.get('cpassWord').value ? null : { mismatch: true };
}
  validateLogin(){
    this.password = stringify(Md5.hashStr(this.logInForm.value.passWord)) ;
    console.log(this.password) ;
    var user = {
      userName:this.logInForm.value.username,
      password:this.password
    }
    this.talkWithDbService.doUserValidation(user).subscribe((data)=>{
      var tempObj:any = data["message"]  ;
      if (tempObj=="admin"){
        this.talkWithDbService.usertype = "admin" ;
        this.talkWithDbService.loggedInUser = user.userName ;
        this.router.navigateByUrl('admin');
      }else if (tempObj=="user"){
        this.talkWithDbService.usertype = "user" ;
        this.talkWithDbService.loggedInUser = user.userName ;
        this.router.navigateByUrl('');
      }
      else {
        this.userValidationFailMessage = "please enter correct username and password" ;
      }
    },(err)=>{
  
    }) ;
  }
  registerUser(){
    this.password = stringify(Md5.hashStr(this.registerForm.value.passWord)) ;
    var user = {
      userName:this.registerForm.value.username,
      mailId:this.registerForm.value.mailId,
      password:this.password,
      mobile:this.registerForm.value.mobilePhone
    }
    this.talkWithDbService.registerUser(user).subscribe((data)=>{
     // console.log(user) ;
      var tempObj:any = data["message"]  ;
      if (tempObj==true){
        this.registeredUser = "You registered Successfully. Please Login!"
        this.router.navigateByUrl('login');
      }
    },(err)=>{
  
    }) ;
  }


  ngOnInit(): void {
  }

}
