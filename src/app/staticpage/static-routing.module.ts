import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent} from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { PriceComponent } from './price/price.component';


const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'portfolio', component: PortfolioComponent },
{ path: 'service', component: ServiceComponent },
{ path: 'price', component: PriceComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
   ]
})
export class StaticRoutingModule { }
