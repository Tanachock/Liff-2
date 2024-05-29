import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animedetail',
  templateUrl: './animedetail.component.html',
  styleUrls: ['./animedetail.component.css']
})
export class AnimedetailComponent {

  @Input() animelist: any[] = [];

  selectAnime(){
    
  }
}
