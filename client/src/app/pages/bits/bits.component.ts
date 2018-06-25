/*
 * @Author: Nizars
 * @Date: 2018-06-18 20:19:26
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-21 17:19:10
 */

import { Component, OnInit } from '@angular/core';
import { TwitchApiService } from '../../services/twitch-api/twitch-api.service';
import { BitsLeaderboard, Entry, DateRange } from '../../models/twitch/twitch-api/bits-leaderboard.model';
import { User } from '../../models/twitch/twitch-api/user.model';

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
  public leaderboardUsers = new Map();

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


  constructor(private twitchApi: TwitchApiService) { }

  ngOnInit() {
    this.leaderboardEntries = [ ];
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

      this.leaderboardEntries = [];
      for (let i = 0; i < leaderboard.total; i++) {
        this.leaderboardEntries.push(new Entry(
          leaderboard.data[i].user_id,
          leaderboard.data[i].rank,
          leaderboard.data[i].score
        ));
      }

      this.leaderboard = new BitsLeaderboard(
        this.leaderboardEntries,
        new DateRange(
          leaderboard.date_range.started_at,
          leaderboard.date_range.ended_at
        ),
        leaderboard.total
      );

      this.getLeaderboardUsers();

    });
  }

  // GET BIT LEADERBOARD USERS
  getLeaderboardUsers() {
    for (let i = 0; i < this.leaderboard.getTotal(); i++) {

      this.twitchApi.getUserById(this.leaderboardEntries[i].user_id)
      .subscribe(user => {

        let id: string;
        let login: string;
        let display_name: string;
        let type: string;
        let broadcaster_type: string;
        let description: string;
        let profile_image_url: string;
        let offline_image_url: string;
        let view_count: string;

        if ((user.data[0] !== null) &&
            (user.data[0] !== undefined)) {

          if ((user.data[0].id !== undefined) &&
              (user.data[0].id !== undefined) ) {
            id = user.data[0].id;
          } else {
            id = null;
          }

          if ((user.data[0].login !== undefined) &&
              (user.data[0].login !== undefined) ) {
            login = user.data[0].login;
          } else {
            login = null;
          }

          if ((user.data[0].display_name !== undefined) &&
              (user.data[0].display_name !== undefined) ) {
            display_name = user.data[0].display_name;
          } else {
            display_name = null;
          }

          if ((user.data[0].type !== undefined) &&
              (user.data[0].type !== undefined) ) {
            type = user.data[0].type;
          } else {
            type = null;
          }

          if ((user.data[0].broadcaster_type !== undefined) &&
              (user.data[0].broadcaster_type !== undefined) ) {
            broadcaster_type = user.data[0].broadcaster_type;
          } else {
            broadcaster_type = null;
          }

          if ((user.data[0].description !== undefined) &&
              (user.data[0].description !== undefined) ) {
            description = user.data[0].description;
          } else {
            description = null;
          }

          if ((user.data[0].profile_image_url !== undefined) &&
              (user.data[0].profile_image_url !== undefined) ) {
            profile_image_url = user.data[0].profile_image_url;
          } else {
            profile_image_url = null;
          }

          if ((user.data[0].offline_image_url !== undefined) &&
              (user.data[0].offline_image_url !== undefined) ) {
            offline_image_url = user.data[0].offline_image_url;
          } else {
            offline_image_url = null;
          }

          if ((user.data[0].view_count !== undefined) &&
              (user.data[0].view_count !== undefined) ) {
            view_count = user.data[0].view_count;
          } else {
            view_count = null;
          }
        } else {
          id = null;
          login = null;
          display_name = null;
          type = null;
          broadcaster_type = null;
          description = null;
          profile_image_url = null;
          offline_image_url = null;
          view_count = null;
        }



        const newUser = new User(
          id,
          login,
          display_name,
          type,
          broadcaster_type,
          description,
          profile_image_url,
          offline_image_url,
          view_count
        );

        this.leaderboardUsers.set(newUser.id, newUser);

      });
    }
  }

  getUserLogin(user_id: string) {
    if (this.leaderboardUsers.has(user_id)) {
      if ((this.leaderboardUsers.get(user_id).login !== undefined) &&
          (this.leaderboardUsers.get(user_id).login !== null)) {
        return this.leaderboardUsers.get(user_id).login;
      } else if (this.leaderboardUsers.get(user_id).login === null) {
        return 'Deleted user';
      } else {
        return '';
      }
    } else {
      return 'User login';
    }
  }

  getUserDisplayName(user_id: string) {
    if (this.leaderboardUsers.has(user_id)) {
      if ((this.leaderboardUsers.get(user_id).display_name !== undefined) &&
      (this.leaderboardUsers.get(user_id).display_name !== null)) {
          return this.leaderboardUsers.get(user_id).display_name;
        } else if (this.leaderboardUsers.get(user_id).display_name === null) {
          return 'Deleted user';
        } else {
          return '';
        }
    } else {
      return 'Display Name';
    }
  }

  getUserType(user_id: string) {
    if (this.leaderboardUsers.has(user_id)) {
      if ((this.leaderboardUsers.get(user_id).type !== undefined) &&
          (this.leaderboardUsers.get(user_id).type !== null)) {
        return this.leaderboardUsers.get(user_id).type;
      } else if (this.leaderboardUsers.get(user_id).type === null) {
        return 'Deleted user';
      } else {
        return '';
      }
    } else {
      return 'Type';
    }
  }

  getUserBroadcasterType(user_id: string) {
    if (this.leaderboardUsers.has(user_id)) {
      if ((this.leaderboardUsers.get(user_id).broadcaster_type !== undefined) &&
          (this.leaderboardUsers.get(user_id).broadcaster_type !== null)) {
        return this.leaderboardUsers.get(user_id).broadcaster_type;
      } else if (this.leaderboardUsers.get(user_id).broadcaster_type === null) {
        return 'Deleted user';
      } else {
        return '';
      }
    } else {
      return 'Broadcaster type';
    }
  }

  getUserDescription(user_id: string) {
    if (this.leaderboardUsers.has(user_id)) {
      if ((this.leaderboardUsers.get(user_id).description !== undefined) &&
          (this.leaderboardUsers.get(user_id).description !== null)) {
        return this.leaderboardUsers.get(user_id).description;
      } else if (this.leaderboardUsers.get(user_id).description === null) {
        return 'Deleted user';
      } else {
        return '';
      }
    } else {
      return 'Description';
    }
  }

  getUserChannelUrl(user_id: string) {
    if (this.leaderboardUsers.has(user_id)) {
      if ((this.leaderboardUsers.get(user_id).login !== undefined) &&
          (this.leaderboardUsers.get(user_id).login !== null)) {
        return this.leaderboardUsers.get(user_id).login;
      } else if (this.leaderboardUsers.get(user_id).login === null) {
        return 'https://www.twitch.tv/404';
      } else {
        return 'https://www.twitch.tv/404';
      }
    } else {
      return 'https://www.twitch.tv/404';
    }
  }

  getUserProfileImageUrl(user_id: string) {
    if (this.leaderboardUsers.has(user_id)) {
      if ((this.leaderboardUsers.get(user_id).profile_image_url !== undefined) &&
          (this.leaderboardUsers.get(user_id).profile_image_url !== null)) {
        return this.leaderboardUsers.get(user_id).profile_image_url;
      } else if (this.leaderboardUsers.get(user_id).profile_image_url === null) {
        return '../../../assets/images/TwitchProfileImageTemplate.png';
      } else {
        return '../../../assets/images/TwitchProfileImageTemplate.png';
      }
    } else {
      return '../../../assets/images/TwitchProfileImageTemplate.png';
    }
  }

  getUserOfflineImageUrl(user_id: string) {
    if (this.leaderboardUsers.has(user_id)) {
      if ((this.leaderboardUsers.get(user_id).offline_image_url !== undefined) &&
          (this.leaderboardUsers.get(user_id).offline_image_url !== null)) {
        return this.leaderboardUsers.get(user_id).offline_image_url;
      } else if (this.leaderboardUsers.get(user_id).offline_image_url === null) {
        return '../../../assets/images/TwitchOfflineImageTemplate300.png';
      } else {
        return '../../../assets/images/TwitchOfflineImageTemplate300.png';
      }
    } else {
      return '../../../assets/images/TwitchOfflineImageTemplate300.png';
    }
  }

  getUserViewCount(user_id: string) {
    if (this.leaderboardUsers.has(user_id)) {
      if ((this.leaderboardUsers.get(user_id).view_count !== undefined) &&
          (this.leaderboardUsers.get(user_id).view_count !== null)) {
        return this.leaderboardUsers.get(user_id).view_count;
      } else if (this.leaderboardUsers.get(user_id).login === null) {
        return 'Deleted user';
      } else {
        return '';
      }
    } else {
      return 0;
    }
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

  tabOnShow() {

  }

}

