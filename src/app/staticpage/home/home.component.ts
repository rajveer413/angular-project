import { Component, OnInit } from '@angular/core';
import { FormService} from '../../form/form.service';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { CurrencydataService} from '../../currencydata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	currencys = [];
  result:any;
  selectedCurrency:any;
	selectedcurrencys ="";

	form = this.fb.group({

		currency: ['',[Validators.required]],
    paise: ['', Validators.required],
	})

  constructor(private fb: FormBuilder , private currencydataservice:CurrencydataService) { }

  ngOnInit() {

  	this.currencydataservice.getCurrency().subscribe( (currencys)=> {
      this.currencys = currencys;

    });

  }

  showResult(event:Event) {

    let amount = this.form.controls.paise.value;
    let currency  =this.form.controls.currency.value;
    if(amount == "") {
      alert("please enter amount");
      return;
    }

    let selectedOption = event.target['options'];
    let selectedIndex = selectedOption.selectedIndex;
    let selectedText = selectedOption[selectedIndex].text;
    this.selectedCurrency = selectedText;
    this.result = amount * currency;
  }


}
