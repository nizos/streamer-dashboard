/*
 * @Author: Nizars
 * @Date: 2018-06-22 15:02:01
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-22 21:52:16
 */



import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { environment } from '../../../environments/environment.dev';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class TwitchChatService {

  public newMessage = '';
  private message = new BehaviorSubject<string>(this.newMessage);
  cast = this.message.asObservable();

  private chatMessages: string[] = [];
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
    console.log('TwitchChatService -> onOpen -> evt: ', evt);
    this.doSend('PASS ' + this.oauth);
    this.doSend('NICK ' + this.username);
    this.doSend('JOIN #' + this.channel);
    this.doSend('CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership');
  }

  public onClose(evt: any) {
    console.log('TwitchChatService -> onClose -> evt: ', evt);
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

      // DisplayName
      let displayName = regDisplayNameString.exec(chatString).toString();
      displayName = displayName[1];
      // If No DisplayName Get Twitch Name
      if (displayName.length <= 0) {
          const twitchName = regTwNameString.exec(chatString).toString();
          // twitchName = twitchName[1];
          // displayName = twitchName;
      }
      // console.log('displayName: ' + displayName);

      // User Color
      const userColorString = regUserColorString.exec(chatString).toString();
      // userColorString = userColorString[1];
      // console.log('userColorString: ' + userColorString);

      // Chat Message
      const messageString = regMessageString.exec(chatString).toString();
      // messageString = messageString[1];
      // console.log('messageString: ' + messageString);

      // Is User A Mod
      const modString = regModString.exec(chatString).toString();
      // modString = modString[1];
      // console.log('modString: ' + modString);

      // Room ID
      const roomIdString = regRoomIdString.exec(chatString).toString();
      // roomIdString = roomIdString[1];
      // console.log('roomIdString: ' + roomIdString);

      // Is User A Subscriber
      const subscriberString = regSubscriberString.exec(chatString).toString();
      // subscriberString = subscriberString[1];
      // console.log('subscriberString: ' + subscriberString);

      // Is User Using Turbo
      let turboString = regTurboString.exec(chatString).toString();
      turboString = turboString[1];
      // console.log('turboString: ' + turboString);

      // User ID
      const userIdString = regUserIdString.exec(chatString).toString();
      // userIdString = userIdString[1];
      // console.log('userIdString: ' + userIdString);

      // User Type
      // mod, global_mod, admin, staff
      const userTypeString = regUsertypeString.exec(chatString).toString();
      // userTypeString = userTypeString[1];
      // console.log('userTypeString: ' + userTypeString);

      // Twitch Name
      const twNameString = regTwNameString.exec(chatString).toString();
      // twNameString = twNameString[1];
      // console.log('twNameString: ' + twNameString);


      // Timestamp
      const timestamp = regTimestampString.exec(chatString);
      // timestamp = this.htmlEncode(timestamp[1]);
      const myDate = new Date(+timestamp * 1);
      const myDateGMT = myDate.toUTCString() + '<br>' + myDate.toLocaleString();
      const hours = myDate.getHours();
      let minutes;

      if (myDate.getMinutes() < 10) {
        minutes = '0' + myDate.getMinutes();
      } else {
        minutes = myDate.getMinutes();
      }


      const seconds = myDate.getSeconds();
      const timestampHHMM = hours + ':' + minutes;
      const timestampHHMMSS = hours + ':' + minutes + ':' + seconds;
      // console.log("timestampHHMM: " + timestampHHMM);
      // console.log("timestampHHMMSS: " + timestampHHMMSS);


      // message = this.htmlEncode(message);

      // SEND DATA
      this.message.next(
        `<span class="timestamp">${timestampHHMM} </span>`
      + `<span class="name" style="color:${userColorString}">${displayName}</span>`
      + `<span class="colon">: </span>`
      + `<span class="message">${messageString}</span>`);

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

  public writeToScreen(message: string) {
    console.log('TwitchCHatService -> writeToScreen -> message: ', message);
  }

  public getMessages(): Observable<string> {
    return new Observable((observer) => {
      observer.next(this.newMessage);
    });
  }

  // public newMessage(message) {
  //   console.log('TwitchCHatService -> newMessage -> message: ', message);
  //   this.chatMessages.push(message);
  // }

}

