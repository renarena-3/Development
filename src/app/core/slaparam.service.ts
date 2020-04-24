import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class SlaparamService implements  OnInit {

  _slaparamData$=new BehaviorSubject<any>([]);
 

  constructor(private userService : UserService) {
    this.userService.getSlaParams().subscribe((data)=>{
    this._slaparamData$.next(data);
    });
   }
  
   ngOnInit() {
   
  }
   get slaparamData(){
    
    return this._slaparamData$.asObservable();
   }
   set slaparamData(data){

     this._slaparamData$.next(data);

   }

}
