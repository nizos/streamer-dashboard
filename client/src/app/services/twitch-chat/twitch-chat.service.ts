/*
 * @Author: Nizars
 * @Date: 2018-06-22 15:02:01
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-23 14:49:51
 */



import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { environment } from '../../../environments/environment.dev';
import { BehaviorSubject } from 'rxjs';
import { ChatService } from '../../models/twitch/twitch-chat/chat-service/chat-service.model';


@Injectable()
export class TwitchChatService {

  private newMessage: ChatService = new ChatService();
  private message = new BehaviorSubject<ChatService>(this.newMessage);
  cast = this.message.asObservable();

  private websocket: WebSocket;
  private username = environment.TWITCH_CHAT_CONFIG.username;
  private oauth = environment.TWITCH_CHAT_CONFIG.oauth;
  private channel = environment.TWITCH_CHAT_CONFIG.channel;
  private socketURI = environment.TWITCH_CHAT_CONFIG.socketURI;
  private bots = environment.TWITCH_CHAT_CONFIG.bots;
  private output = environment.TWITCH_CHAT_CONFIG.output;
  private line_limit = environment.TWITCH_CHAT_CONFIG.line_limit;

  constructor() {
    this.websocket = new WebSocket(this.socketURI);
    this.websocket.onopen = (evt) => { this.onOpen(evt); };
    this.websocket.onclose = (evt) => { this.onClose(evt); };
    this.websocket.onmessage = (evt) => { this.onMessage(evt); };
    this.websocket.onerror = (evt) => { this.onError(evt); };

  }

  public onOpen(evt: any) {
    // console.log('TwitchChatService -> onOpen -> evt: ', evt);
    this.doSend('PASS ' + this.oauth);
    this.doSend('NICK ' + this.username);
    this.doSend('JOIN #' + this.channel);
    this.doSend('CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership');
  }

  public onClose(evt: any) {
    // console.log('TwitchChatService -> onClose -> evt: ', evt);
  }

  public onMessage(evt: any) {
    console.log('TwitchChatService -> onMessage -> evt.data: ', evt.data);

    const chatString = evt.data.trim();

    // Message
    const regBadgesString = new RegExp('@badges=(.*?);color=', 'g');
    const regUserColorString = new RegExp('color=(.*?);display-name=', 'g');
    const regDisplayNameString = new RegExp('display-name=(.*?);emotes=', 'g');
    const regEmotesString = new RegExp('emotes=(.*?);id=', 'g');
    const regMessageIdString = new RegExp('id=(.*?);mod=', 'g');
    const regModString = new RegExp('mod=(.*?);room-id=', 'g');
    const regRoomIdString = new RegExp('room-id=(.*?);subscriber=', 'g');
    const regSubscriberString = new RegExp('subscriber=(.*?);tmi-sent-ts=', 'g');
    const regTimestampString = new RegExp('tmi-sent-ts=(.*?);turbo=', 'g');
    const regTurboString = new RegExp('turbo=(.*?);user-id=', 'g');
    const regUserIdString = new RegExp('user-id=(.*?);user-type=', 'g');
    const regUsertypeString = new RegExp('subscriber=(.*?);tmi-sent-ts=', 'g');
    const regTwNameString = new RegExp('!(.*?)@(.*?).tmi.twitch.tv', 'g');
    const regMessageString = new RegExp(' PRIVMSG #[a-zA-z0-9_]+ :(.*?)$', 'g');

    // Fill Message Data
    if (chatString.match(regDisplayNameString) && chatString.match(regMessageString)) {


      // Bages
      const badgesString = regBadgesString.exec(chatString)[1].toString();
      // console.log('badgesString: ' + badgesString);

      // Color
      const userColorString = regUserColorString.exec(chatString)[1].toString();
      // userColorString = userColorString[1];
      // console.log('userColorString: ' + userColorString);


      // DisplayName
      const displayName = regDisplayNameString.exec(chatString)[1].toString();
      // displayName = displayName[1];
      // console.log('displayName: ' + displayName);



      // Emotes
      const emotesString = regEmotesString.exec(chatString)[1].toString();
      // console.log('emotesString: ' + emotesString);

      // Message ID
      const messageIdString = regMessageIdString.exec(chatString)[1].toString();
      // console.log('messageIdString: ' + messageIdString);

      // Mod
      const modString = regModString.exec(chatString)[1].toString();
      // modString = modString[1];
      // console.log('modString: ' + modString);


      // Room ID
      const roomIdString = regRoomIdString.exec(chatString)[1].toString();
      // roomIdString = roomIdString[1];
      // console.log('roomIdString: ' + roomIdString);


      // Subscriber
      const subscriberString = regSubscriberString.exec(chatString)[1].toString();
      // subscriberString = subscriberString[1];
      // console.log('subscriberString: ' + subscriberString);


      // Time stamp
      const timeStampString = regTimestampString.exec(chatString)[1].toString();
      // subscriberString = subscriberString[1];
      // console.log('timeStampString: ' + timeStampString);


      // Turbo
      const turboString = regTurboString.exec(chatString)[1].toString();
      // turboString = turboString[1];
      // console.log('turboString: ' + turboString);


      // User ID
      const userIdString = regUserIdString.exec(chatString)[1].toString();
      // userIdString = userIdString[1];
      // console.log('userIdString: ' + userIdString);


      // Type
      const userTypeString = regUsertypeString.exec(chatString)[1].toString();
      // userTypeString = userTypeString[1];
      // console.log('userTypeString: ' + userTypeString);



      // Twitch Name
      const twitchNameString = regTwNameString.exec(chatString)[1].toString();
      // twNameString = twNameString[1];
      // console.log('twitchNameString: ' + twitchNameString);

      // Message
      const messageString = regMessageString.exec(chatString)[1].toString();
      // messageString = messageString[1];
      // console.log('messageString: ' + messageString);


      // SEND DATA
      const chatService = new ChatService(badgesString, userColorString, displayName, emotesString, messageIdString, modString, roomIdString, subscriberString, timeStampString, turboString, userIdString, userTypeString, twitchNameString, messageString);
      this.message.next(chatService);


      // KEEP ALIVE
      if (evt.data.trim() === 'PING :tmi.twitch.tv') {
          this.doSend('PONG :tmi.twitch.tv');
      }
    }
  }

  public onError(evt: any) {

  }

  public doSend(message) {
    this.websocket.send(message);
  }

  // public htmlEncode(arg0: any): any {
  //   throw new Error('Method not implemented.');
  // }

  // public newMessage(message) {
  //   console.log('TwitchCHatService -> newMessage -> message: ', message);
  //   this.chatMessages.push(message);
  // }

}

