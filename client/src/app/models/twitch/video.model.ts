/*
 * @Author: Nizars
 * @Date: 2018-06-18 12:38:53
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 12:47:20
 */


// model for Video
class BaseVideo {
  public created_at: string;
  public description: string;
  public duration: string;
  public id: string;
  public language: string;
  public pagination: string;
  public published_at: string;
  public thumbnail_url: object;
  public title: string;
  public type: string;
  public url: object;
  public user_id: string;
  public view_count: number;
  public viewable: string;

  constructor(created_at: string, description: string, duration: string, id: string, language: string, pagination: string,
    published_at: string, thumbnail_url: object, title: string, type: string, url: object, user_id: string, view_count: number,
    viewable: string) {
    this.created_at = created_at;
    this.description = description;
    this.duration = duration;
    this.id = id;
    this.language = language;
    this.pagination = pagination;
    this.published_at = published_at;
    this.thumbnail_url = thumbnail_url;
    this.title = title;
    this.type = type;
    this.url = url;
    this.user_id = user_id;
    this.view_count = view_count;
    this.viewable = viewable;
  }
}

export class Video implements BaseVideo {
  public created_at: string;
  public description: string;
  public duration: string;
  public id: string;
  public language: string;
  public pagination: string;
  public published_at: string;
  public thumbnail_url: object;
  public title: string;
  public type: string;
  public url: object;
  public user_id: string;
  public view_count: number;
  public viewable: string;

  constructor(video: any) {
    this.created_at = video.data[0].created_at;
    this.description = video.data[0].description;
    this.duration = video.data[0].duration;
    this.id = video.data[0].id;
    this.language = video.data[0].language;
    this.pagination = video.data[0].pagination;
    this.published_at = video.data[0].published_at;
    this.thumbnail_url = video.data[0].thumbnail_url;
    this.title = video.data[0].title;
    this.type = video.data[0].type;
    this.url = video.data[0].url;
    this.user_id = video.data[0].user_id;
    this.view_count = video.data[0].view_count;
    this.viewable = video.data[0].viewable;
  }
}
