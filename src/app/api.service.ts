import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSeason(year:string,season: string){

    return this.http.get(`https://api.jikan.moe/v4/seasons/${year}/${season}`)
  }
  
  getTopanime(){
    return this.http.get(`https://api.jikan.moe/v4/top/anime`)
  }

  getSeasonNow(){
    return this.http.get(`https://api.jikan.moe/v4/top/anime/now`)
  }
}
