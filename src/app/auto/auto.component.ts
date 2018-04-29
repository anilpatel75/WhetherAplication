import { AnilAnimation } from './../animation/anilAnimation';
import {  Server } from './../share/server.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css'],
  animations:[AnilAnimation]
})
export class AutoComponent implements OnInit {
    todayData:any =[];
    showPage:boolean = false;
  constructor(private Server:Server) { }

  ngOnInit() {
    this.Server.dataBase.subscribe((single)=>
  {
       this.todayData = single[0];
       
  })
  }
  weatherIcon(icon) {
    switch (icon) {
    case 'partly-cloudy-day':
      return 'assets/png/001-sky-1.png'
    case 'clear-day':
      return 'assets/png/003-weather.png'
    case 'partly-cloudy-night':
      return 'assets/png/001-sky-1.png'
      case 'rain':
      return 'assets/png/004-rain.png'
    default:
      return 'assets/png/001-sky-1.png'
  }
}
}
