import { Component, Input} from '@angular/core';
import { SeasonalComponent } from '../seasonal/seasonal.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

  year:string = ""
  season:string = ""
  seasons = ['winter', 'spring', 'summer', 'fall']
}
