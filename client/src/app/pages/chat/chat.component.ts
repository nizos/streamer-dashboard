/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:08:19
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-23 14:40:45
 */

import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../../models/twitch/twitch-chat/chat-message.model';
import { ChatUser } from '../../models/twitch/twitch-chat/chat-user.model';
import { MessageContent } from '../../models/twitch/twitch-chat/message-content.model';
import { TwitchChatService } from '../../services/twitch-chat/twitch-chat.service';
import { ChatService } from '../../models/twitch/twitch-chat/chat-service/chat-service.model';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public chatMessage: ChatService;
  public chatMessages: ChatService[] = [];


  // CONSTRUCTOR
  constructor(private chatService: TwitchChatService) { }

  // INITIALIZE
  ngOnInit() {
    this.chatMessage = new ChatService();
    this.chatMessages.push(this.chatMessage);
    this.chatService.cast.subscribe(message => {
      console.log('​ChatComponent -> ngOnInit -> message', message);
      const newMessage = new ChatService(
        message.badges,
        message.color,
        message.display_name,
        message.emotes,
        message.message_id,
        message.mod,
        message.room_id,
        message.subscriber,
        message.time_stamp,
        message.turbo,
        message.user_id,
        message.type,
        message.twitch_name,
        message.message
      );
      this.chatMessages.push(newMessage);
    });
  }


  tabOnShow() {

  }
}
