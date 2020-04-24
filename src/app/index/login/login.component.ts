import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { UrlConfig } from 'src/app/shared/his-app-configuration/url-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user:any={}
   
  constructor(private apiservice:ApiService, private route:Router) { }

  ngOnInit(){
  
}
login(logincredentials:any){

  if(logincredentials === 'INVALID'){
  return false;
  }
   
  this.apiservice.save(UrlConfig.user_login,logincredentials.value).subscribe((data:any) =>{
    if(data != null){
      
      this.route.navigate(['header']);
  
}
else{
    this.route.navigate(['index/login']);
}

})


}
}
