import { Component, OnInit } from '@angular/core';
import { FormService} from '../../form/form.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

	

  constructor(public formservice: FormService) { }

  ngOnInit() {
  }

}
