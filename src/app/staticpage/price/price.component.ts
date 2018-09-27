import { Component, OnInit } from '@angular/core';
import { FormService} from '../../form/form.service';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { FootballdataService} from '../../footballdata.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

	standings:any;
	tables:any;

  constructor(private footballdataservice:FootballdataService) { }

  ngOnInit() {
  	this.footballdataservice.getStanding().subscribe((standings)=>{
  		this.standings = standings;
  		this.standings.standings.forEach(standing => {
  			if(standing.type == 'TOTAL') {
  				this.tables = standing.table;
  			}
  		})
  	});


  }

}
