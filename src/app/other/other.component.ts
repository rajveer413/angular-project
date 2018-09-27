import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { OtherService} from '../Other.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
	matches = [];
  // cricketScore = [];

  constructor(private fb: FormBuilder, private otherservice:OtherService) { }

  ngOnInit() {
  	this.otherservice.getMatches().subscribe((matches)=>{
  		this.matches=matches;
      });

    }
 //    liveScore(){
 //      this.otherservice.getScore().subscribe((cricketScore)=>{
 //      this.cricketScore=cricketScore;
 //    });
 // }
}


