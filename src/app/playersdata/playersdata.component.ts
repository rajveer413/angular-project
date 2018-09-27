import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { OtherService} from '../Other.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-playersdata',
  templateUrl: './playersdata.component.html',
  styleUrls: ['./playersdata.component.css']
})
export class PlayersdataComponent implements OnInit {

	player=[];

  constructor(private otherservice:OtherService, 
    private route: ActivatedRoute) { }

  ngOnInit() {


  	let pid = this.route.snapshot.paramMap.get('pid');
  	this.otherservice.getPlayer(pid).subscribe((player)=>{
  		this.player=player;
  	})
  }

}
