import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private api: NewsapiService) { }

// display headline data 

sportsNewsData:any = [];

  ngOnInit(): void {
    this.api.sportsNews().subscribe((result)=>{
      console.log(result.articles)
      this.sportsNewsData = result.articles
    })
  }
}
