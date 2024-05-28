import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';

export interface DataSeasonAnime {
  title: string;
  aired: string;
  episodes: number;
  score: number;
  image_url: any;
  genres: string;
}

@Component({
  selector: 'app-seasonal',
  templateUrl: './seasonal.component.html',
  styleUrls: ['./seasonal.component.css']
})
export class SeasonalComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }


  year: string = ""
  season: string = ""

  seasons = ['winter', 'spring', 'summer', 'fall']

  ngOnInit(): void {
    // this.selectSeasons()
  }


  // seasonDataAnime: any[] = [];
  animelist: any

  selectSeasons() {
      this.apiService.selectSeason(this.year, this.season).subscribe((res:any) => {
        console.log(res)
        this.animelist = res.data
        console.log(this.animelist)
        this.convertData(this.animelist)
      });
  }
  Animelistseason: DataSeasonAnime[] = []
  convertData(data: any) {
    let _data = [];
    // console.log("data in convert ",data)
    // console.log("len ",data.length)
    for(let i=0;i<data.length;i++){
      _data.push({
        'title': data[i]["title"] || "-",
        'aired': data[i]["aired"] || {},
        'episodes': data[i]["episodes"] || "-",
        'score': data[i]["score"] || "-",
        'image_url': data[i]["images"]?.jpg?.image_url || "-",
        'genres': data[i]["genres"] || [],
      })
    }
    this.Animelistseason = _data;
    // console.log(this.Animelistseason)
  }

  searchSeason() {
    console.log("year ", this.year)
    console.log("Season ", this.season)
    if(this.year!="" && this.season!="" &&Number(this.year)>1000){
      this.selectSeasons();
    }
  }

  selectAnime(){
    this.router.navigate(['/detail'])
  }
}

