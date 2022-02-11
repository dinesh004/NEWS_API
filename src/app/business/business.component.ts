import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api: NewsapiService) { }

  // display headline data 

  businessNewsData:any = [];
  
  ngOnInit(): void {
    this.api.businessNews().subscribe((result)=>{
      console.log(result.articles)
      this.businessNewsData = result.articles
    })
  }
}
