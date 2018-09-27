import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StaticRoutingModule} from './static-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PriceComponent } from './price/price.component';

import { Keys } from '../keys.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    PortfolioComponent,
    PriceComponent,
    Keys
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StaticRoutingModule



  ],
  providers: [],
  bootstrap: []
})
export class StaticModule { }
