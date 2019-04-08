import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginUserService } from './login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: boolean = false;
  isSubmitted: boolean = false;

   //validation on login form
  loginForm = this.formBuilder.group({
    emailId: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private router: Router , private myService:LoginUserService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.loginForm.valid){
      this.myService.loginUser(this.loginForm.value).subscribe(response =>{
        if((Object.keys(response).length) == 0){
          this.errorMessage = true;
          return;
        }
        else{
          var data = JSON.parse(JSON.stringify(response));
          localStorage.setItem('token', data[0].id.toString()); //saving the user into local storage
          localStorage.setItem('token-name', data[0].firstName+' '+data[0].lastName);
          this.router.navigate(['user/mypage']);
        }
      });
    }
  
    
  }

}
