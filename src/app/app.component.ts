import { Component, OnInit } from '@angular/core';
import { FormService} from './form/form.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cricket';
  
  	constructor(public formservice: FormService){

  	}

  onSelect(){
  	location.href = "http://localhost:4200/home";

  }
  ngOnInit(){

  }

  logout() { 
    localStorage.clear();
    this.formservice.logout();
  	
  }

}

