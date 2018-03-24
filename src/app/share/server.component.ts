import { HttpModule, ResponseOptions } from '@angular/http';
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable, EventEmitter } from '@angular/core';



@Injectable()
export class Server
{ 
    hourlyData = new BehaviorSubject<any>([]);
    dataBase = new BehaviorSubject<any>([]); // use for main data
    singleData = new BehaviorSubject<number>(0);
   
    lastData = [];
    array =[];
    constructor(private http:Http)
     { }
  
  
 getresult(name)
 {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" 
    + name + "&key=AIzaSyDzlv5SHJ9DS2I21mE7v3hebM7Cy0Mfx2w")
    .map((response:Response) =>response.json());
}
 getresultApi(latitude,longitude)
{
   return this.http.get(`http://crossorigin.me/https://api.darksky.net/forecast/a1af379a0ee6a353d461de0d3642c216/${latitude},${longitude}`)
    .map((response:Response) => 
    {
    return response.json();
 });
     
}



onDaily()
{
 

}
}

