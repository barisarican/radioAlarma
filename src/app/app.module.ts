import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AlarmsPage } from '../pages/alarms/alarms';
import { NewRadioAlarm } from '../pages/new-radio-alarm/new-radio-alarm';
import { RadioAlarmProvider } from '../providers/radio-alarm-provider';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AlarmsPage,
    NewRadioAlarm
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlarmsPage,
    NewRadioAlarm
  ],
  providers: [
    Storage,
    RadioAlarmProvider
  ]
})
export class AppModule {}
