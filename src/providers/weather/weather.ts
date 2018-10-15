import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  constructor(public http: HttpClient) {
    
  
  }

  getRemoteData(city:string){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=4ed6396708619208bdf173a1fffe001c');
   }
   
  getjhbW(){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=johannesburg&APPID=4ed6396708619208bdf173a1fffe001c');
   }
}
