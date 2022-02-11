import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { NoPageComponent } from './no-page/no-page.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';


const routes: Routes = [
  
  {path:'tech' , component:TechComponent},
  {path:'sports' , component:SportsComponent},
  {path:'business' , component:BusinessComponent},
  {path:'home' , component:TopheadlineComponent},
  {path:'**', component:NoPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
