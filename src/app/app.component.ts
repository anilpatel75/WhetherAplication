import { Router } from '@angular/router';


import { Component } from '@angular/core';
import { Server } from './share/server.component';
import { trigger,state, style, transition,animate } from '@angular/animations';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
    state('active',   style({transform: 'translateX(0) scale(1.02)'})),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out')),
    //  transition('active <=> inactive',
    //   [animate('500ms ease-out',
    //   style({transform:'scale(1.0)'}))]
    // )
    ]
)]
})
export class AppComponent  {
 state:string = 'inactive';
  lat;
  long;
  constructor(private server:Server, private router:Router) { }

  ngOnInit() {
    this.watchId;
  }
  
 watchId = navigator.geolocation.watchPosition(function(position)
   {console.log(position.coords.latitude) ;
   console.log(position.coords.longitude)});  

  onSearch(name){
    this.server.getresult(name).subscribe(
    (empDataResponse:any[])=>{
                    this.lat = empDataResponse["results"][0]["geometry"]["location"].lat;
                    this.long = empDataResponse["results"][0]["geometry"]["location"].lng;
                 console.log(this.lat)
    this.server.getresultApi(this.lat,this.long).subscribe((newData)=>
  {         this.server.hourlyData.next(newData["hourly"]["data"]);
           this.server.dataBase.next(newData["daily"]["data"])
         
  });
      
          
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
          


                      
}

