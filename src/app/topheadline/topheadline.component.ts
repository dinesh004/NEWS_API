import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api: NewsapiService) { }

// display headline data 

topHeadlinesData:any = [];

  ngOnInit(): void {
    this.api.headlinesNews().subscribe((result)=>{
      console.log(result.articles)
      this.topHeadlinesData = result.articles
    })
  }

}
