import { Radio } from 'radio';
import { Alarm } from 'alarm';

export class RadioAlarm {
    label: string;
    radio = new Radio();
    alarm = new Alarm();
    isActive: boolean;

    constructor(){
      var hour = new Date().getHours();
      var minute = new Date().getMinutes();
      this.alarm.date = (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute);
      this.label = 'New Alarm';
      this.isActive = true;
    }

}
