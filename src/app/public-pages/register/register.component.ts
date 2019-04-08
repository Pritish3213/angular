import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { passwordValidator } from './password-validation';
import { AddUserService } from './add-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSubmitted: boolean = false;
  successMsg: boolean = false;

  registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    emailId: ['', [Validators.required, Validators.email]],
    phoneNo: ['', [Validators.required]],
    address: ['', [Validators.required]],
    medHistory: [''],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, { validators: passwordValidator });

  constructor(private formBuilder: FormBuilder, private myService: AddUserService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.registerForm.valid){
      this.myService.addUser(this.registerForm.value).subscribe(response => {
        console.log(response);
        this.successMsg = true;
      });
    }
    //console.log('fgh');
    
  }

}
