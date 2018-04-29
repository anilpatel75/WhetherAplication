import { AnilAnimation } from './../animation/anilAnimation';
import { Server } from './../share/server.component';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
    state('active',   style({transform: 'translateX(0) scale(1.02)'})),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out')),
   
    ]),AnilAnimation,
   ]
 
})
export class HomeComponent implements OnInit {

   fiveData :any=[]
   data:any =[]
   state:string = 'inactive';
   
  constructor(private server:Server)
  {}     
ngOnInit()
{
 this.server.dataBase.subscribe((five)=>      
 {  this.data = five
   for(let i=0;i<5;i++)
 {
  this.fiveData.push(five[i]);
 }

 });
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
