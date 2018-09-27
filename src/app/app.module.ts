import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {StaticModule } from './staticpage/static.module';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormModule} from './form/form.module';
import { FormService} from './form/form.service';
import { OtherComponent } from './other/other.component';
import { ScoreComponent } from './score/score.component';
import { SquadComponent } from './squad/squad.component';
import { PlayersdataComponent } from './playersdata/playersdata.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    ScoreComponent,
    SquadComponent,
    PlayersdataComponent,
    
  ],
  imports: [
    BrowserModule,
    StaticModule,
    FormModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
