import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule} from './form-routing.module';
import { FormComponent} from './form.component';


import { ContactComponent } from './contact/contact.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';

import { AuthGuardService} from '../authguard.service';
import { FormService} from './form.service';

@NgModule({
  declarations: [
    FormComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormRoutingModule



  ],
  providers: [FormService, AuthGuardService],
  bootstrap: []
})
export class FormModule { }
