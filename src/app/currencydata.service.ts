import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Currency} from './currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencydataService {

	private currencydata = "http://data.fixer.io/api/latest?access_key=ae5f120d8459f69e2895c5579c0d103c";

  constructor(
  	private http:HttpClient
  	) { }

getCurrency():Observable<Currency[]>{
	return this.http.get<Currency[]>("http://data.fixer.io/api/latest?access_key=ae5f120d8459f69e2895c5579c0d103c");
}

}
