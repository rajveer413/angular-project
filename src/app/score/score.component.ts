import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { OtherService} from '../Other.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

	scores = [];

  constructor(private fb: FormBuilder, 
    private otherservice:OtherService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    let unique_id = this.route.snapshot.paramMap.get('unique_id');
  	this.otherservice.getScore(unique_id).subscribe((scores)=>{
  		this.scores=scores;
  	})
  }


}
