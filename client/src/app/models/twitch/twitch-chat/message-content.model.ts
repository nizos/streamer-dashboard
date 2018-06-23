/*
 * @Author: Nizars
 * @Date: 2018-06-22 17:00:22
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-22 17:00:22
 */

interface IMessageContent {
  message?: string;

  fromData(message: MessageContent): MessageContent;
  getMessage(): string;
}

export class MessageContent implements IMessageContent {
  public message?: string;

  constructor(message?: string) {
    this.message = message || '';
  }

  public fromData(messageContent: MessageContent): MessageContent {
    this.message = messageContent.message;
    return this;
  }

  public getMessage(): string {
    return this.message;
  }
}
