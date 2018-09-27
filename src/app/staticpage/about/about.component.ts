import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

addHtml:any = [];
  constructor() { }

  ngOnInit() {
  	const secondsCounter = interval(1000);
		const counter = secondsCounter.subscribe((n) => {
			this.addHtml.push('message' +n);
		    if(n == 10){
		    	counter.unsubscribe();
		    }
  })
}
}

