import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsapiService } from './services/newsapi.service';
import { TechComponent } from './tech/tech.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {NoPageComponent} from './no-page/no-page.component'


@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechComponent,
    SportsComponent,
    BusinessComponent,
    NoPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    LoadingBarHttpClientModule
    
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
