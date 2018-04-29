import { AnilAnimation } from './../animation/anilAnimation';
import { Server } from './../share/server.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-single-day',
  templateUrl: './single-day.component.html',
  styleUrls: ['./single-day.component.css'],
  animations:[AnilAnimation]
})
export class SingleDayComponent implements OnInit {
 id:number;
 singleData;
  constructor(private route:ActivatedRoute, private server:Server) { }

  ngOnInit() {
    this.route.params.subscribe((param)=>
  {
     this.id = +param['id'];
     this.server.dataBase.subscribe((singledata)=>
    {
     this.singleData = singledata[this.id];
    
})
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
