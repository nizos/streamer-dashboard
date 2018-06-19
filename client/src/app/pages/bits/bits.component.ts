/*
 * @Author: Nizars
 * @Date: 2018-06-18 20:19:26
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-19 12:56:59
 */

import { Component, OnInit } from '@angular/core';
import { TwitchApiService } from '../../services/twitch-api/twitch-api.service';
import { BitsLeaderboard } from '../../models/twitch/bits-leaderboard.model';

@Component({
  selector: 'app-bits',
  templateUrl: './bits.component.html',
  styleUrls: ['./bits.component.scss']
})
export class BitsComponent implements OnInit {

  public startedAtDate: string = null;
  public startedAtTime: string = null;
  public resultsToReturn: string = null;
  public resultsPeriod: string = null;
  public userId: string = null;

  public datepickerOptions: Pickadate.DateOptions = {
    format: 'dddd, dd mmm, yyyy',
    formatSubmit: 'yyyy-mm-dd',
  };
  public timepickerOptions: Pickadate.TimeOptions = {
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: true, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: true, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: () => alert('AfterShow has been invoked.'), // function for after opening timepicker
  };

  public bitsLeaderboards$: any[];

  // CONSTRUCTOR
  constructor(private twitchApi: TwitchApiService) { }

  // INITIALIZE
  ngOnInit() {
    this.bitsLeaderboards$ = [ ];
  }

  // GET BIT LEADERBOARD
  getBitsLeaderboard() {
    const reqData = {
      count: this.resultsToReturn,
      period: this.resultsPeriod,
      started: this.dateTimeInRFC339(this.formatDate(), this.formatTime()),
      user_id: this.userId
    };

    this.twitchApi.getBitsLeaderboard(reqData)
    .subscribe(bitsLeaderboard => {
      console.log('Bits leaderboard: ');
      console.log(bitsLeaderboard);
      this.bitsLeaderboards$.push(new BitsLeaderboard(bitsLeaderboard));
    });
  }


  // Format date
  formatDate() {
    const date = this.startedAtDate;
    if (date !== null && undefined && '') {
      const dateParts = date.split('-', 3);
      const formatedDate = {
        year: dateParts[0],
        month: dateParts[1],
        day: dateParts[2]
      };
      return formatedDate;
    } else {
      return null;
    }
  }

  // Format time
  formatTime() {
    const time = this.startedAtTime;
    if (time !== null && undefined && '') {
      let hours: number;
      let minutes: number;
      const timeParts = time.split(':', 2);

      // HOURS
      if (time.search('PM')) {
        hours = +timeParts[0] + 12;
      } else {
        hours = +timeParts[0];
      }
      // MINUTES
      minutes = +timeParts[1].substring(0, 2);
      const formatedTime = {
        hours: hours,
        minutes: minutes,
        seconds: '00'
      };
      return formatedTime;
    } else {
      return null;
    }
  }

  // Date Time in RFC 3339
  dateTimeInRFC339(date, time) {

    if ((date !== null && undefined && '') && (time !== null && undefined && '')) {
      // 2009-09-28T19:03:12Z
      let formatedDateTime = '';

      // Year
      formatedDateTime += date.year;

      // Date Speparator
      formatedDateTime += '-';

      // Month
      formatedDateTime += date.month;

      // Date Speparator
      formatedDateTime += '-';

      // Day
      formatedDateTime += date.day;

      // Time seperator
      formatedDateTime += 'T';

      // Hours
      formatedDateTime += time.hours;

      // Colon
      formatedDateTime += ':';

      // Minutes
      formatedDateTime += time.minutes;

      // Colon
      formatedDateTime += ':';

      // Seconds
      formatedDateTime += time.seconds;

      // Seconds Symbol
      formatedDateTime += 'Z';

      console.log('Formated date time: ');
      console.log(formatedDateTime);

      return formatedDateTime;
    } else {
      return null;
    }
  }
}

