/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:08:19
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-23 14:40:45
 */

import { Component, OnInit } from '@angular/core';
import { TwitchChatService } from '../../services/twitch-chat/twitch-chat.service';
import { ChatService } from '../../models/twitch/twitch-chat/chat-service/chat-service.model';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public chatMessage: ChatService;
  public chatMessagesContainer: ChatService[] = [];
  public timeFormat = 'dddd, MMMM Do YYYY, h:mm:ss a';

  public preTimeStamp: string;
  public postTimeStamp: string;
  public timeStampSeparator: string;
  public displayNameSeparator: string;


  // CONSTRUCTOR
  constructor(private chatService: TwitchChatService) { }

  // INITIALIZE
  ngOnInit() {
    this.chatMessage = new ChatService();
    this.chatMessagesContainer = [];
    this.changeTimeFormat('kk:mm');
    this.preTimeStamp = '[';
    this.postTimeStamp = ']';
    this.timeStampSeparator = '-';
    this.displayNameSeparator = ':';


    this.chatService.cast.subscribe(message => {
      console.log('​ChatComponent -> ngOnInit -> message', message);
      // let now = moment().format('LLLL');
      const formatedTime = moment(+message.time_stamp).format(this.timeFormat);


      const newMessage = new ChatService(
        message.badges,
        message.color,
        message.display_name,
        message.emotes,
        message.message_id,
        message.mod,
        message.room_id,
        message.subscriber,
        formatedTime,
        message.turbo,
        message.user_id,
        message.type,
        message.twitch_name,
        message.message
      );
      this.chatMessagesContainer.push(newMessage);
    });
  }

  changeTimeFormat(newTimeFormat: string) {
    this.timeFormat = newTimeFormat;
  }


  tabOnShow() {

  }
}
