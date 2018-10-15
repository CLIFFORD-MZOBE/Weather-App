import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { WeatherProvider } from '../../providers/weather/weather';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
city:string;
info;
show:number;
  reset:number;
  view:number;
  tempName:string;
  temp:number;
  degSys:string;
  kelSys:string;
  farSys:string;
  constructor(public http: HttpClient, public weather: WeatherProvider) {
    this.city="";
    this.show=0;
    this.reset=0;
    this.view=0;
    this.degSys=""
  }
  popWeather(){
    this.show=1;
    this.reset=1;
    this.view=1;
    this.weather.getRemoteData(this.city).subscribe(weather=>{
      this.info = weather;
      if(this.tempName=='kelvin'){
        this.temp=this.info.main.temp
      }else if(this.tempName=='celsius'){
        this.temp=this.info.main.temp-273.15
      }else if(this.tempName=='fahrenheit'){
        this.temp=this.info.main.temp*(9/5)-459.67;
      }
      
      console.log(this.info);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  restWeather(){
    this.show=0;
    this.reset=0;
    this.city="";
    this.view=0;
    this.tempName="";
  }


  

}
