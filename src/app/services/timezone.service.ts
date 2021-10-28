import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class TimeZoneService {

  constructor() { }

  getTimeZoneModel () {
    return {
        "Name": moment.tz(moment.tz.guess()).format('z'),
        "Offset": new Date().getTimezoneOffset() / 60
    }
  }
}

