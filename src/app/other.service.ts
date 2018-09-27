import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Other} from './other';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor(private http: HttpClient){}

  	getMatches():Observable<any>{
  		const data = {
  			'apikey': 'HSMDqIJwdGOOpe5Wx5mgmEkFzBm2'
  		};

  		return this.http.post<any>("http://cricapi.com/api/matches",data);
  	}
  	getScore(unique_id):Observable<any>{
  		const data = {
  			'apikey': 'HSMDqIJwdGOOpe5Wx5mgmEkFzBm2',
        'unique_id': unique_id
  		};

  		return this.http.post<any>("http://cricapi.com/api/cricketScore",data);
  	}
getSquad(unique_id):Observable<any>{
       const data = {
         'apikey': 'HSMDqIJwdGOOpe5Wx5mgmEkFzBm2',
         'unique_id': unique_id
       };

       return this.http.post<any>("http://cricapi.com/api/fantasySummary",data);

  }
  getPlayer(pid):Observable<any>{
    const data = {

      'apikey': 'HSMDqIJwdGOOpe5Wx5mgmEkFzBm2',
         'pid': pid
    }

    return this.http.post<any>("http://cricapi.com/api/playerStats",data);

  }
}

