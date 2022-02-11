import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http: HttpClient) { }

  //top headline api url
  TopHeadlinesNews="https://newsapi.org/v2/top-headlines?country=in&apiKey=1079004fce32404ca469be3f556ffd3a";

  //tech news api url
  TechNews="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1079004fce32404ca469be3f556ffd3a";

  //sports news api url
  SportNews="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1079004fce32404ca469be3f556ffd3a";

  //bussiness news api url
  BusinessNews="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1079004fce32404ca469be3f556ffd3a";


  //creating methods (observable + top headline)
  headlinesNews():Observable<any>{
  return this.http.get(this.TopHeadlinesNews)
  }
  
  //creating methods (observable + tech news)
  techNews():Observable<any>{
    return this.http.get(this.TechNews)
  }

  //creating methods (observable + sports news)
  sportsNews():Observable<any>{
    return this.http.get(this.SportNews)
  }

  //creating methods (observable + bussiness news)
  businessNews():Observable<any>{
    return this.http.get(this.BusinessNews)
  }

}
