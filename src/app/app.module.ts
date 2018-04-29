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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstPageComponent } from './first-page/first-page.component';


    const appRoute: Routes =[
    {path:'', component:FirstPageComponent},
    {path:'auto' , component:AutoComponent},
    {path:'list' , component:ListOfWetherComponent},
    {path:'list/:id', component:SingleDayComponent},
    {path:'home' , component:HomeComponent},
    {path:'daily' , component:DailyTempComponent},
    {path:'**', component:FirstPageComponent}]
   @NgModule({
  declarations: [
    AppComponent,
    ListOfWetherComponent,
    DailyTempComponent,
    HomeComponent,
    AutoComponent,
    SingleDayComponent,
    FirstPageComponent
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [Server],
  bootstrap: [AppComponent]
})
export class AppModule { }
