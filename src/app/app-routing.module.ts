import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { OtherComponent } from './other/other.component';
import { ScoreComponent } from './score/score.component';
import { SquadComponent } from './squad/squad.component';
import { PlayersdataComponent } from './playersdata/playersdata.component';
const routes: Routes = [

{ path:'other',component:OtherComponent},
{ path:'other/:unique_id', component:ScoreComponent},
{ path:'squad/:unique_id',component:SquadComponent},
{ path:'player/:pid',component:PlayersdataComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
   ]
})
export class AppRoutingModule { }
