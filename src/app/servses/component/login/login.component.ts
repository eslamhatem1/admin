import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminregisterService } from '../../adminregister.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private servse:AdminregisterService,private route:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  lodingorm=this.fb.group({

    email:['',[Validators.required,Validators.email]],
    passord:['',[Validators.required]]

  })


  checkdata(){

    this.servse.get().subscribe(
      (Response:any)=>{

          const user=Response.find((a:any)=>{

            return a.email === this.lodingorm.value.email && a.password === this.lodingorm.value.password
          });
          if(user){
            alert("login success")
            this.lodingorm.reset();
            this.route.navigate(['main'])
          }
          else{
            alert("user not found")
          }
        },
        (error:any)=>{}

    )
  }

  // login(){
  //   this.sevises.get().subscribe(

  //       (Response:any)=>{

  //         const user=Response.find((a:any)=>{

  //           return a.email === this.lodingorm.value.email && a.password === this.lodingorm.value.password
  //         });
  //         if(user){
  //           alert("login success")
  //           this.lodingorm.reset();
  //           this.router.navigate(['home'])
  //         }
  //         else{
  //           alert("user not found")
  //         }
  //       },
  //       (error:any)=>{}

  //   )
  // }



}
