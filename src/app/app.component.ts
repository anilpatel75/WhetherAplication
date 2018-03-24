import { Router } from '@angular/router';


import { Component } from '@angular/core';
import { Server } from './share/server.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

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
          


                      
}

