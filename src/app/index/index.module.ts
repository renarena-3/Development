import { NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { IndexRoutingModule } from './index-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';
import { SharedModule } from '../shared/shared.module';
//import { NgbDateCustomParserFormatter } from '../shared/models/ngb-date-custom-parser-formatter';


@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    SharedModule
  ],
  providers: [UserService],
  
  exports: [LoginComponent, SignupComponent, ForgotComponent],
})
export class IndexModule { }
