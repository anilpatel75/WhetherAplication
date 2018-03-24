import { Component, OnInit,Input, EventEmitter,Output, OnChanges} from '@angular/core';
import { Server } from '../share/server.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-of-wether',
  templateUrl: './list-of-wether.component.html',
  styleUrls: ['./list-of-wether.component.css']
})
export class ListOfWetherComponent implements OnInit,OnChanges{
  
   
   
   dailyData:any =[];
  
 
  constructor(private service:Server , private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
   this.service.dataBase.subscribe((listOfData)=>
  {
   
    this.dailyData = listOfData;
  
  })
}
ngOnChanges()
{
 
}
   weatherIcon(icon) {
  switch (icon) {
    case 'partly-cloudy-day':
      return 'wi wi-day-cloudy'
    case 'clear-day':
      return 'wi wi-day-sunny'
    case 'partly-cloudy-night':
      return 'wi wi-night-partly-cloudy' 
      case 'rain':
      return 'wi wi-day-rain'
    default:
      return `wi wi-day-sunny`
  }
}




}