/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:08:19
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-22 17:31:58
 */

import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../../models/twitch/twitch-chat/chat-message.model';
import { ChatUser } from '../../models/twitch/twitch-chat/chat-user.model';
import { MessageContent } from '../../models/twitch/twitch-chat/message-content.model';
import { TwitchChatService } from '../../services/twitch-chat/twitch-chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public chatPreview;
  public chatUser: ChatUser;
  public chatMessage: string;
  public chatMessages: string[] = [];
  public messageContent: MessageContent;
  public ioConnection: any;


  // CONSTRUCTOR
  constructor(private chatService: TwitchChatService) { }

  // INITIALIZE
  ngOnInit() {
    this.chatPreview = '';
    this.chatService.cast.subscribe(message => this.chatMessage = message);
  }


  tabOnShow() {

  }
}
