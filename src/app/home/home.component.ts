import { AnilAnimation } from './../animation/anilAnimation';
import { Server } from './../share/server.component';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[AnilAnimation]
})
export class HomeComponent implements OnInit {

   fiveData :any=[]
   data:any =[]
   
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
  
             
          

    
          

}
