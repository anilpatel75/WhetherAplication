import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { Server } from '../share/server.component';
import { AnilAnimation } from '../animation/anilAnimation';


@Component({
  selector: 'app-daily-temp',
  templateUrl: './daily-temp.component.html',
  styleUrls: ['./daily-temp.component.css'],
  animations : [AnilAnimation]
})
export class DailyTempComponent implements OnInit{
   data:any =[];
   newData:any = [];
   constructor(private service:Server,
     private route:ActivatedRoute,
     private router:Router) { }

  ngOnInit() {
      this.service.hourlyData.subscribe((hourly)=>
     {
       this.data = hourly; 
       this.onFilter();
      })
    }
  onFilter()
  {
    for(let i=0; i<24;i++)
    {  
        this.newData.push(this.data[i]);
    }
  }
  
   
  } 
   




