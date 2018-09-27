import { Component, OnInit } from '@angular/core';
import { ApihitService } from '../../apihit.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordMatchValidator} from '../../password-match-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	continents = [];
	countries = [];
	states = [];
	cities = [];
  registerForm : FormGroup;
  submitted = false;
  constructor(private apiservice: ApihitService) { }

  ngOnInit() {

    this.registerForm = new FormGroup({

    'fullName': new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-z_-]{3,15}$')]),
    'email': new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    'username': new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9]{3,15}$')]),
    'continent': new FormControl('',[Validators.required]),
    'country': new FormControl('',[Validators.required]),
    'state': new FormControl('',[Validators.required]),
    'city': new FormControl('', [Validators.required]),
    'password': new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('^[a-z0-9_-]{8,15}$')]),
    'confirmPassword': new FormControl('',[Validators.required]),


  }, PasswordMatchValidator.MatchPassword);

  	this.apiservice.getConinents()
  	.subscribe(continents => this.continents = continents);
  }

  getCountries(value) {
  	this.apiservice.getcountry(value)
  	.subscribe(countries => this.countries = countries);
  }

  getStates(value) {
  	this.apiservice.getstate(value)
  	.subscribe(states => this.states = states);
  }

  getCities(value) {
  	this.apiservice.getcity(value)
  	.subscribe(cities => this.cities = cities);
  }

  onSubmit(){
    debugger;
    this.submitted = true;
  }
}


