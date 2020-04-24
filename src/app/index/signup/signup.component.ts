import { Component, OnInit } from '@angular/core';
import { NgModule} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray} from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/shared/models/roles';
import { SlaparamService } from 'src/app/core/slaparam.service';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {   

  studentsaveform:FormGroup;

  submitted = false;  
  
  roles: Observable<Roles[]>;


  constructor(
    private userService:UserService,
    public slaparam:SlaparamService  
    ) { }  
  
  ngOnInit() {  
 
   this.studentsaveform=new FormGroup({
        'firstName':new FormControl('',Validators.required),  
        'lastName':new FormControl('',[Validators.required]),
        'email':new FormControl('',Validators.required),
        'password':new FormControl('',Validators.required),
        'dob':new FormControl('',Validators.required),
        'gender':new FormControl('',Validators.required),
        'phno':new FormControl('',Validators.required),
        'role':new FormControl('',Validators.required),
    });  

  }

  

  onSubmit(){
    this.submitted=true;
    console.log(this.studentsaveform);
    this.save();
  }

  save(){
    this.submitted=true;
    let formdata=this.studentsaveform.value;
  
    console.log(formdata);
  this.userService.createUser(formdata).subscribe((data) => console.log(data),(error) => console.log(error));
  
}


  

  

}

