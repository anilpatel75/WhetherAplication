import { Server } from './share/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';



import { AppComponent } from './app.component';
import { ListOfWetherComponent } from './list-of-wether/list-of-wether.component';
import { DailyTempComponent } from './daily-temp/daily-temp.component';
import { HomeComponent } from './home/home.component';
import { AutoComponent } from './auto/auto.component';
import { SingleDayComponent } from './single-day/single-day.component';


 const appRoute: Routes =[
    {path:'', component:AutoComponent},
    {path:'auto' , component:AutoComponent},
    {path:'list' , component:ListOfWetherComponent},
    {path:'list/:id', component:SingleDayComponent},
    {path:'home' , component:HomeComponent},
    {path:'daily' , component:DailyTempComponent},
   
    {path:'**', redirectTo:''}]
@NgModule({
  declarations: [
    AppComponent,
    ListOfWetherComponent,
    DailyTempComponent,
    HomeComponent,
    AutoComponent,
    SingleDayComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [Server],
  bootstrap: [AppComponent]
})
export class AppModule { }
