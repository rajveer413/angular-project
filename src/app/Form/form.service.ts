import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {


 
  isLoggedIn = false;
  name= '';
  email='';
  sex='';
  age='';
  strength='';
  
  constructor() { }


  login(username, password):Observable<any>{

  	if(username == 'test123' && password == 'test123') {
         this.isLoggedIn = true;
         this.name = 'Rajveer';
         this.email = 'rajveer@gmail.com';
         this.sex = 'Male';
         this.age = '21';
         this.strength = 'Full Stack Developer';
      
         localStorage.setItem('isLoggedIn', 'true');
    		 return of('login successfull');
  	}
  	else {
      this.isLoggedIn = false;
      this.name = '';
      this.email = '';
      this.sex = '';
      this.age = '';
      this.strength = '';
      localStorage.setItem('isLoggedIn', 'false');
  		return of('Failed');
  	}
}
    logout(): void {
      this.isLoggedIn = false;
      this.name='';
    }

    checkLogin(): boolean {
         if(localStorage.getItem('isLoggedIn') =='true'){
           return true;
         }else{
           return false;
         }
    }
}


