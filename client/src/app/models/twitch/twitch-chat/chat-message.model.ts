/*
 * @Author: Nizars
 * @Date: 2018-06-21 22:04:37
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-22 17:25:11
 */
import { ChatUser } from './chat-user.model';
import { MessageContent } from './message-content.model';


interface IChatMessage {
  chatUser?: ChatUser;
  messageContent?: MessageContent;

  fromData(message: ChatMessage): ChatMessage;
  getChatUser(): ChatUser;
  getChatMessage(): MessageContent;
}

export class ChatMessage implements IChatMessage {
  public chatUser?: ChatUser;
  public messageContent?: MessageContent;

  constructor(chatUser?: ChatUser, messageContent?: MessageContent) {
    this.chatUser = chatUser || new ChatUser();
    this.messageContent = messageContent || new MessageContent();
  }

  public fromData(message: ChatMessage) {
    this.chatUser = message.chatUser;
    this.messageContent = message.messageContent;
    return this;
  }

  public getChatUser(): ChatUser {
    return this.chatUser;
  }

  public getChatMessage(): MessageContent {
    return this.messageContent;
  }
}

