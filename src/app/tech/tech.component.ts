import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api: NewsapiService) { }

// display headline data 

techNewsData:any = [];

  ngOnInit(): void {
    this.api.techNews().subscribe((result)=>{
      console.log(result.articles)
      this.techNewsData = result.articles
    })
  }

}
