import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UpdateUserService } from './update-user.service';
import { ParChildCommunicationService } from '../services/par-child-communication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId:string;
  isSubmitted: boolean = false;

  //Validations on forms
  updateForm = this.formBuilder.group({
    fullName: ['', [Validators.required]], //Manadatory fields 
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    emailId: ['', [Validators.required]],
    phoneNo: ['', [Validators.required]],
    address: ['', [Validators.required]],
    medHistory: [''],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });



  constructor(private formBuilder: FormBuilder, private myService: UpdateUserService, private commService: ParChildCommunicationService) { }


  //id and token are used to match  the user details
  //setValue() is used to fill he fields with existing data
  ngOnInit() {
    this.userId = localStorage.getItem('token');
    this.myService.getUser({"id": parseInt(this.userId)}).subscribe(response => {
      var data = JSON.parse(JSON.stringify(response));
      this.commService.setName(data[0].firstName+' '+data[0].lastName);
      this.updateForm.get('fullName').setValue(data[0].firstName+' '+data[0].lastName);
      this.updateForm.get('firstName').setValue(data[0].firstName);
      this.updateForm.get('emailId').setValue(data[0].emailId);
      this.updateForm.get('address').setValue(data[0].address);
      this.updateForm.get('phoneNo').setValue(data[0].phoneNo);
      this.updateForm.get('medHistory').setValue(data[0].medHistory);
      this.updateForm.get('lastName').setValue(data[0].lastName);
      this.updateForm.get('password').setValue(data[0].password);
      this.updateForm.get('confirmPassword').setValue(data[0].confirmPassword);
    });

  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.updateForm.valid){
      this.commService.setName(this.updateForm.get('fullName').value);
      localStorage.setItem('token-name', this.updateForm.get('fullName').value);
      var fullname=this.updateForm.get('fullName').value.split(' ');
      delete this.updateForm.value['fullName'];
      this.updateForm.get('firstName').setValue(fullname[0]);
      this.updateForm.get('lastName').setValue(fullname[1]);
      //this.updateForm.value["id"] = parseInt(this.userId);
      this.myService.updateUser(this.updateForm.value, this.userId).subscribe(response => {
      });
    }
    

  }

}
