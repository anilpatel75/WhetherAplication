import { Server } from './../share/server.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-single-day',
  templateUrl: './single-day.component.html',
  styleUrls: ['./single-day.component.css']
})
export class SingleDayComponent implements OnInit {
 id:number;
 singleData=[];
  constructor(private route:ActivatedRoute, private server:Server) { }

  ngOnInit() {
    this.route.params.subscribe((param)=>
  {
     this.id = +param['id'];
    
  })
  this.server.dataBase.subscribe((singleData)=>
{
     this.singleData = singleData[this.id];
     console.log(this.singleData);
})
  }

}
