import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewRadioAlarm } from '../new-radio-alarm/new-radio-alarm';
import { RadioAlarm } from '../classes/radio-alarm';
import { RadioAlarmProvider } from '../../providers/radio-alarm-provider';

@Component({
  selector: 'page-alarms',
  templateUrl: 'alarms.html'
})
export class AlarmsPage {
  public radioAlarms:RadioAlarm[] = [];
  constructor(public navCtrl: NavController,  public radioAlarmProvider: RadioAlarmProvider) {
  }

  ionViewDidLoad() {
  }
  ionViewWillEnter(){
    this.radioAlarmProvider.getRadioAlarms().then((items)=>{
      if(items){
        this.radioAlarms = JSON.parse(items);
      }
    });
  }
  navigateNewRadioAlarm(event){
    this.navCtrl.push(NewRadioAlarm, {'radioAlarms' : this.radioAlarms});
  }


}
