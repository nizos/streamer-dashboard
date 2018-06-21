/*
 * @Author: Nizars
 * @Date: 2018-06-18 20:19:26
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-20 23:57:10
 */

import { Component, OnInit } from '@angular/core';
import { TwitchApiService } from '../../services/twitch-api/twitch-api.service';
import { BitsLeaderboard, Entry } from '../../models/twitch/bits-leaderboard.model';
import { User } from '../../models/twitch/user.model';

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
  public leaderboard: BitsLeaderboard;
  public leaderboardEntries: Entry[] = [];
  public leaderboardUsers: User[] = [];

  public datepickerOptions: Pickadate.DateOptions = {
    format: 'dddd, dd mmm, yyyy',
    formatSubmit: 'yyyy-mm-dd',
  };

  public timepickerOptions: Pickadate.TimeOptions = {
    default: 'now',
    fromnow: 0,
    twelvehour: true,
    donetext: 'OK',
    cleartext: 'Clear',
    canceltext: 'Cancel',
    autoclose: true,
    ampmclickable: true,
  };


  /**
   * @name constructor
   * @desc Creates an instance of BitsComponent.
   * @constructor
   * @param {TwitchApiService} twitchApi
   * @memberof BitsComponent
   */
  constructor(private twitchApi: TwitchApiService) { }

  ngOnInit() {
    this.leaderboardEntries = [ ];
    this.leaderboardUsers = [ ];
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
    .subscribe(leaderboard => {
      console.log('​BitsComponent -> getBitsLeaderboard -> leaderboard', leaderboard);
      this.leaderboard = new BitsLeaderboard(leaderboard);
      console.log('​BitsComponent -> getBitsLeaderboard -> leaderboard', leaderboard);
      this.leaderboardEntries = [ ];
      const total = this.leaderboard.getTotal();
      console.log('​BitsComponent -> getBitsLeaderboard -> total', total);
      for (let i = 0; i < total; i++) {
        // const user_id = leaderboard.entries[i].user_id;
        // const rank = leaderboard.entries[i].rank;
        // const score = leaderboard.entries[i].score;
        // const newEntry = new Entry().fromData(leaderboard.getEntry(i));
        // console.log('​BitsComponent -> getBitsLeaderboard -> newEntry', newEntry);
        // this.leaderboardEntries.push(newEntry);
        this.leaderboardEntries = [ ];
        this.leaderboardEntries = leaderboard.getEntries();
        console.log('​BitsComponent -> getBitsLeaderboard -> leaderboardEntries', this.leaderboardEntries);
      }
      console.log('​BitsComponent -> getBitsLeaderboard -> this.leaderboardEntries', this.leaderboardEntries);
      this.getLeaderboardUsers();
    });
  }

  // GET BIT LEADERBOARD USERS
  getLeaderboardUsers() {
    const total = this.leaderboard.getTotal();
    console.log('​BitsComponent -> getLeaderboardUsers -> total', total);
    for (let i = 0; i < total; i++) {
      console.log('​BitsComponent -> getLeaderboardUsers -> i', i);
      const user_id = this.leaderboardEntries[i].user_id;
      console.log('​BitsComponent -> getLeaderboardUsers -> user_id', user_id);
      this.twitchApi.getUserById(user_id)
      .subscribe(user => {
        console.log('​BitsComponent -> getLeaderboardUsers -> user', user);
        const newUser = new User(user);
        console.log('​BitsComponent -> getLeaderboardUsers -> newUser', newUser);
        this.leaderboardUsers.push(newUser);
      });
    }
    console.log('​BitsComponent -> getBitsLeaderboardUsers -> this.bitsLeaderboardUsers$', this.leaderboardUsers);
  }

  getUserDisplayName(user_id: string) {
    const foundUser = this.leaderboardUsers.find(k => k.user_id === user_id);
    return foundUser.display_name;
  }

  getUserProfileImageUrl(user_id: string) {
    const foundUser = this.leaderboardUsers.find(k => k.user_id === user_id);
    return foundUser.profile_image_url;
  }

  getUserDescription(user_id: string) {
    const foundUser = this.leaderboardUsers.find(k => k.user_id === user_id);
    return foundUser.description;
  }

  // Format date
  formatDate() {
    if (this.startedAtDate !== null && undefined && '') {

      const dateParts = this.startedAtDate.split('-', 3);
      return {
        year: dateParts[0],
        month: dateParts[1],
        day: dateParts[2]
      };

    } else {

      return null;
    }
  }

  // Format time
  formatTime() {
    if (this.startedAtTime !== null && undefined && '') {
      let hours: number;
      let minutes: number;
      const timeParts = this.startedAtTime.split(':', 2);

      if (this.startedAtTime.search('PM')) {
        hours = +timeParts[0] + 12;
      } else {
        hours = +timeParts[0];
      }
      minutes = +timeParts[1].substring(0, 2);

      return {
        hours: hours,
        minutes: minutes,
        seconds: '00'
      };

    } else {

      return null;
    }
  }


  /**
   * @name dateTimeInRFC339
   * @description Converts date and time to RFC 3339 format
   * @param date any
   * @param time any
   */
  dateTimeInRFC339(date, time) {
    if ((date !== null && undefined && '') && (time !== null && undefined && '')) {

      let formatedDateTime = '';
      formatedDateTime += date.year;
      formatedDateTime += '-';
      formatedDateTime += date.month;
      formatedDateTime += '-';
      formatedDateTime += date.day;
      formatedDateTime += 'T';
      formatedDateTime += time.hours;
      formatedDateTime += ':';
      formatedDateTime += time.minutes;
      formatedDateTime += ':';
      formatedDateTime += time.seconds;
      formatedDateTime += 'Z';

      // 2009-09-28T19:03:12Z
      console.log('Formated date time: ');
      console.log(formatedDateTime);
      return formatedDateTime;

    } else {

      return null;
    }
  }

}

