/*
 * @Author: Nizars
 * @Date: 2018-06-18 11:23:34
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-20 22:22:24
 */

interface IUser {
  id?: string;
  login?: string;
  display_name?: string;
  type?: string;
  broadcaster_type?: string;
  description?: string;
  profile_image_url?: string;
  offline_image_url?: string;
  view_count?: string;

  fromData(user: User): User;
  getId(): string;
  getLogin(): string;
  getDisplayName(): string;
  getType(): string;
  getBroadcasterType(): string;
  getDescription(): string;
  getProfileImageUrl(): string;
  getOfflineImageUrl(): string;
  getViewCount(): string;
}

export class User implements IUser {

  constructor(public id?: string, public login?: string, public display_name?: string, public type?: string, public broadcaster_type?: string, public description?: string, public profile_image_url?: string, public offline_image_url?: string, public view_count?: string) {
      this.id = id || '';
      this.login = login || '';
      this.display_name = display_name || '';
      this.type = type || '';
      this.broadcaster_type = broadcaster_type || '';
      this.description = description || '';
      this.profile_image_url = profile_image_url || '';
      this.offline_image_url = offline_image_url || '';
      this.view_count = view_count || '';
  }

  fromData(user: User) {
    this.id = user.id;
    this.login = user.login;
    this.display_name = user.display_name;
    this.type = user.type;
    this.broadcaster_type = user.broadcaster_type;
    this.description = user.description;
    this.profile_image_url = user.profile_image_url;
    this.offline_image_url = user.offline_image_url;
    this.view_count = user.view_count;
    return this;
  }

  public getId(): string {
    return this.id;
  }

  public getLogin(): string {
    return this.login;
  }

  public getDisplayName(): string {
    return this.display_name;
  }

  public getType(): string {
    return this.type;
  }

  public getBroadcasterType(): string {
    return this.broadcaster_type;
  }

  public getDescription(): string {
    return this.description;
  }

  public getProfileImageUrl(): string {
    return this.profile_image_url;
  }

  public getOfflineImageUrl(): string {
    return this.offline_image_url;
  }

  public getViewCount(): string {
    return this.view_count;
  }
}
