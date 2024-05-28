import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeasonalComponent } from './seasonal/seasonal.component';
import { NavComponent } from './nav/nav.component';
import { AnimedetailComponent } from './animedetail/animedetail.component';

const routes: Routes = [
  { path:'',redirectTo:'pageseason',pathMatch:'full'},
  { path:'pageseason',component:SeasonalComponent},
  { path:'nav',component:NavComponent},
  { path:'detail',component:AnimedetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
