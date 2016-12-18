import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { RadioAlarm } from '../pages/classes/radio-alarm';

@Injectable()
export class RadioAlarmProvider {

  constructor(public http: Http,public storage: Storage) {

  }

  getRadioList(){
    let radios = [{name:"Eksen Fm", code:"radio.eksenFm", iconUrl:"/images/eksenfm_icon.jpg"},
                   {name: "Kent Fm", code:"radio.kentFm", iconUrl:"/images/kentfm_icon.jpg"},
                   {name: "Rock Fm", code:"radio.rockFm", iconUrl:"/images/rockfm_icon.png"}];
    return radios;
  }
  getRadioByCode(code:string){
    let radios = this.getRadioList();
    for(let radio of radios){
      if(code == radio.code){
        return radio;
      }
    }
  }

  getRadioAlarms(){
    return this.storage.get("radioAlarms");
  }

  saveRadioAlarms(radioAlarms){
    this.storage.set("radioAlarms",JSON.stringify(radioAlarms));
  }

}
