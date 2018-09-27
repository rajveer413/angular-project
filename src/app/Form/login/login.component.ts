import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checklogin;
	loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private formService: FormService, private router: Router) { }

  ngOnInit() {
  }

  loginuser() {
    
    let username = this.loginForm.controls.userName.value;
    let password = this.loginForm.controls.password.value; 

    this.formService.login(username, password)
    .subscribe(data => 
      this.checklogin = data
      );

    // if(this.checklogin) {
    //   this.router.navigate(['/home']);
    // }
  }

}
