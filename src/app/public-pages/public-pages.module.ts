import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PublicPagesRoutingModule } from './public-pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddUserService } from './register/add-user.service';
import { LoginUserService } from './login/login-user.service';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PublicPagesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AddUserService, LoginUserService]
})
export class PublicPagesModule { }
