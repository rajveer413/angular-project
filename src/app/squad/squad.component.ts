import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { OtherService} from '../Other.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {
	squad:any =[];
	team1players = [];
	team2players = [];

  constructor(private otherservice:OtherService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
  	let unique_id= this.route.snapshot.paramMap.get('unique_id');
     this.otherservice.getSquad(unique_id).subscribe((squad)=>{
     	
     	this.squad=squad;

     	this.squad.data.team[0].players.forEach((player) => {
     		this.team1players.push(player);
     	});

     	this.squad.data.team[1].players.forEach((player) => {
     		this.team2players.push(player);
     	})
     })
  }
  


}
