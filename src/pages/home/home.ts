import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  info;
  infoList;
  city:string;
  show:number;
  reset:number;
  view:number;
  error:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public weather: WeatherProvider) {
    this.show=0;
    this.reset=0;
    this.view=0;
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  viewWeather(){
    this.show=1;
    this.reset=1;
    this.view=1;
    
   if(this.city==''){
    this.error=0;
   }
   else{
    this.error=1;
   }
    if(this.city == 'Pretoria'){
      this.weather.getRemoteData(this.city).subscribe(weather=>{
        this.info = weather;
        
        console.log(this.info);
      });
    }else if(this.city == 'Johannesburg'){
      this.weather.getjhbW().subscribe(weather=>{
        this.info = weather;
        
        
        console.log(this.info);
      });
    }
    console.log('city'+this.city);
  }

  restWeather(){
    this.show=0;
    this.reset=0;
    this.city="";
    this.view=0;
  }

}
