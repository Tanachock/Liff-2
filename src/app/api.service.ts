import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.myanimelist.net/v2/anime/season/2017/summer?limit=4';

  constructor(private http: HttpClient) { }

  selectSeason(year:string,season: string){

    return this.http.get(`https://api.jikan.moe/v4/seasons/${year}/${season}`)
  }
}
