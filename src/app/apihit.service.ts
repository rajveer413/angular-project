import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApihitService {

  constructor(
  private http: HttpClient 
  ) { }

  getConinents():Observable<any> {
  	return this.http.get<any>("http://www.geonames.org/childrenJSON?geonameId=6295630");
  }

  getcountry(continentcode):Observable<any>{
  	var countryurl = "http://www.geonames.org/childrenJSON?geonameId="+continentcode;
  	return this.http.get<any>(countryurl);

  }

  getstate(value):Observable<any>{
  	var stateurl = "http://www.geonames.org/childrenJSON?geonameId="+value;
  	return this.http.get<any>(stateurl);
  }
  getcity(value):Observable<any>{
  	var cityurl = "http://www.geonames.org/childrenJSON?geonameId="+value;
  	return this.http.get<any>(cityurl);
  }
}
