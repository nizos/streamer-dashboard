/*
 * @Author: Nizars
 * @Date: 2018-06-18 11:23:34
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 11:23:34
 */


// model for User
class BaseUser {
  public id: string;
  public login: string;
  public display_name: string;
  public type: string;
  public broadcaster_type: string;
  public description: string;
  public profile_image_url: string;
  public offline_image_url: string;
  public view_count: string;

  constructor(id: string, login: string, display_name: string, type: string, broadcaster_type: string,
    description: string, profile_image_url: string, offline_image_url: string, view_count: string) {
    this.id = id;
    this.login = login;
    this.display_name = display_name;
    this.type = type;
    this.broadcaster_type = broadcaster_type;
    this.description = description;
    this.profile_image_url = profile_image_url;
    this.offline_image_url = offline_image_url;
    this.view_count = view_count;
  }
}

export class User implements BaseUser {
  public id: string;
  public login: string;
  public display_name: string;
  public type: string;
  public broadcaster_type: string;
  public description: string;
  public profile_image_url: string;
  public offline_image_url: string;
  public view_count: string;

  constructor(user: any) {
    this.id = user.data[0].id;
    this.login = user.data[0].login;
    this.display_name = user.data[0].display_name;
    this.type = user.data[0].type;
    this.broadcaster_type = user.data[0].broadcaster_type;
    this.description = user.data[0].description;
    this.profile_image_url = user.data[0].profile_image_url;
    this.offline_image_url = user.data[0].offline_image_url;
    this.view_count = user.data[0].view_count;
  }
}
