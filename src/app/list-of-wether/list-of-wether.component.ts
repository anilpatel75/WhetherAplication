import { Component, OnInit,Input, EventEmitter,Output, OnChanges} from '@angular/core';
import { Server } from '../share/server.component';
import { Router, ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,keyframes
} from '@angular/animations';
import { AnilAnimation } from '../animation/anilAnimation';



@Component({
  selector: 'app-list-of-wether',
  templateUrl: './list-of-wether.component.html',
  styleUrls: ['./list-of-wether.component.css'],
 
  animations: [
    trigger('heroState', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
    state('active',   style({transform: 'translateX(0) scale(1.02)'})),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out')),
   
    ]),AnilAnimation,
   ]
})
export class ListOfWetherComponent implements OnInit,OnChanges{
dailyData:any =[];
state:string = 'inactive';


   constructor(private service:Server ,
   private router:Router,
    private route:ActivatedRoute) { }
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
onMouseOver(index)
{
  this.state === 'active' ? this.state ='inactive' :this.state = 'active';
 
}
onMouseleave(index)
{
  this.state === 'inactive' ? this.state ='active' : this.state = 'inactive';
  
}
ontoggle()
{
  this.state === 'inactive' ? this.state ='inactive' :this.state = 'inactive';
}



}