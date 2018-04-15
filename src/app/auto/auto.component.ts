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
}
