import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Match} from './match';

@Injectable({
  providedIn: 'root'
})
export class FootballdataService {

  constructor(
  	private http:HttpClient
  	) { }
  getMatches():Observable<Match[]>{
  	const httpOptions = {
	  headers: new HttpHeaders({
	    'X-Auth-Token':  'fa08a8d088c84e60ad2710e32fa00e5e',
	  })
	};
  	return this.http.get<Match[]>("http://api.football-data.org/v2/matches", httpOptions);
}

getStanding():Observable<Match[]>{
  	const httpOptions = {
	  headers: new HttpHeaders({
	    'X-Auth-Token':  'fa08a8d088c84e60ad2710e32fa00e5e',
	  })
	};
  	return this.http.get<Match[]>("http://api.football-data.org/v2/competitions/2021/standings", httpOptions);
}
}
