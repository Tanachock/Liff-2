import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeasonalComponent } from './seasonal/seasonal.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './error.interceptor';
import { AnimedetailComponent } from './animedetail/animedetail.component';
import { TopanimeComponent } from './topanime/topanime.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonalComponent,
    AnimedetailComponent,
    TopanimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
