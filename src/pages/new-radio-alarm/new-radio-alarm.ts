import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RadioAlarm } from '../classes/radio-alarm';
import { RadioAlarmProvider } from '../../providers/radio-alarm-provider';
import { Radio } from '../classes/radio';

@Component({
  selector: 'page-new-radio-alarm',
  templateUrl: 'new-radio-alarm.html'
})
export class NewRadioAlarm {
  public radios: Radio[];
  public radioAlarms:RadioAlarm[];
  public newRadioAlarm;
  constructor(public navCtrl: NavController, private navParams:NavParams, public radioAlarmProvider: RadioAlarmProvider) {
    this.radios = radioAlarmProvider.getRadioList();
    this.newRadioAlarm = new RadioAlarm();
    this.radioAlarms = navParams.get("radioAlarms");
  }

  ionViewDidLoad() {

  }
  cancel(){
    this.navCtrl.pop();
  }
  save(){
    this.radioAlarms.push(this.newRadioAlarm);
    this.radioAlarmProvider.saveRadioAlarms(this.radioAlarms);
    this.navCtrl.pop();
  }

}
