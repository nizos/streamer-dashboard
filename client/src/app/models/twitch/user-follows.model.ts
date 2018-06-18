/*
 * @Author: Nizars
 * @Date: 2018-06-18 12:35:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 12:38:40
 */


// model for User Follows
class BaseUserFollows {
  public followed_at: string;
  public from_id: string;
  public pagination: string;
  public to_id: object;
  public total: number;

  constructor(followed_at: string, from_id: string, pagination: string, to_id: object, total: number) {
    this.followed_at = followed_at;
    this.from_id = from_id;
    this.pagination = pagination;
    this.to_id = to_id;
    this.total = total;
  }
}

export class UserFollows implements BaseUserFollows {
  public followed_at: string;
  public from_id: string;
  public pagination: string;
  public to_id: object;
  public total: number;

  constructor(userFollows: any) {
    this.followed_at = userFollows.data[0].followed_at;
    this.from_id = userFollows.data[0].from_id;
    this.pagination = userFollows.data[0].pagination;
    this.to_id = userFollows.data[0].to_id;
    this.total = userFollows.data[0].total;
  }
}

