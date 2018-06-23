/*
 * @Author: Nizars
 * @Date: 2018-06-23 13:29:19
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-23 14:20:50
 */

interface IChatService {
  badges?: string;
  color?: string;
  display_name?: string;
  emotes?: string;
  message_id?: string;
  mod?: string;
  room_id?: string;
  subscriber?: string;
  time_stamp?: string;
  turbo?: string;
  user_id?: string;
  type?: string;
  twitch_name?: string;
  message?: string;
}

export class ChatService implements IChatService {

  public badges?: string;
  public color?: string;
  public display_name?: string;
  public emotes?: string;
  public message_id?: string;
  public mod?: string;
  public room_id?: string;
  public subscriber?: string;
  public time_stamp?: string;
  public turbo?: string;
  public user_id?: string;
  public type?: string;
  public twitch_name?: string;
  public message?: string;

  constructor(badges?: string, color?: string, display_name?: string, emotes?: string, message_id?: string, mod?: string, room_id?: string, subscriber?: string, time_stamp?: string, turbo?: string, user_id?: string, type?: string, twitch_name?: string, message?: string) {

    this.badges = badges || '';
    this.color = color || '';
    this.display_name = display_name || '';
    this.emotes = emotes || '';
    this.message_id = message_id || '';
    this.mod = mod || '';
    this.room_id = room_id || '';
    this.subscriber = subscriber || '';
    this.time_stamp = time_stamp || '';
    this.turbo = turbo || '';
    this.user_id = user_id || '';
    this.type = type || '';
    this.twitch_name = twitch_name || '';
    this.message = message || '';
  }


}

