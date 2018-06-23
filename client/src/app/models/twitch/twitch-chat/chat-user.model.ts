/*
 * @Author: Nizars
 * @Date: 2018-06-22 16:57:04
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-22 16:57:04
 */

interface IChatUser {
  name?: string;

  fromData(chatUser: ChatUser): ChatUser;
  getName(): string;
}

export class ChatUser implements IChatUser {
  public name?: string;

  constructor(name?: string) {
    this.name = name || '';
  }

  public fromData(chatUser: ChatUser) {
    this.name = chatUser.name;
    return this;
  }

  public getName(): string {
    return this.name;
  }
}

