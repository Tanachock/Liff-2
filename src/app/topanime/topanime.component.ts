import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topanime',
  templateUrl: './topanime.component.html',
  styleUrls: ['./topanime.component.css']
})
export class TopanimeComponent {

  @Input() animelist: any[] = []

  selectAnime(){
    
  }
}
