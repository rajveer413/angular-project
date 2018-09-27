import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuardService } from '../authguard.service';

import { FormComponent } from './form.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent} from './login/login.component';



const routes: Routes = [

    {path: 'form', component: FormComponent, children: [
	{path: 'contact', component: ContactComponent,canActivate: [AuthGuardService]},
	{path: 'register', component: RegisterComponent },
	{path: 'login', component: LoginComponent }
]}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
   ]
})
export class FormRoutingModule { }
