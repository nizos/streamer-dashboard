/*
 * @Author: Nizars
 * @Date: 2018-06-18 11:32:18
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 11:39:08
 */

// model for Clip
class BaseClip {
  public broadcaster_id: string;
  public created_at: string;
  public creator_id: string;
  public embed_url: string;
  public game_id: string;
  public id: string;
  public language: string;
  public pagination: string;
  public thumbnail_url: string;
  public title: string;
  public url: string;
  public video_id: string;
  public view_count: number;

  constructor(broadcaster_id: string, created_at: string, creator_id: string, embed_url: string, game_id: string, id: string,
    language: string, pagination: string, thumbnail_url: string, title: string, url: string, video_id: string,
    view_count: number) {
    this.broadcaster_id = broadcaster_id;
    this.created_at = created_at;
    this.creator_id = creator_id;
    this.embed_url = embed_url;
    this.game_id = game_id;
    this.id = id;
    this.language = language;
    this.pagination = pagination;
    this.thumbnail_url = thumbnail_url;
    this.title = title;
    this.url = url;
    this.video_id = video_id;
  }
}

export class Clip implements BaseClip {
  public broadcaster_id: string;
  public created_at: string;
  public creator_id: string;
  public embed_url: string;
  public game_id: string;
  public id: string;
  public language: string;
  public pagination: string;
  public thumbnail_url: string;
  public title: string;
  public url: string;
  public video_id: string;
  public view_count: number;

  constructor(clip: any) {
    this.broadcaster_id = clip.data[0].broadcaster_id;
    this.created_at = clip.data[0].created_at;
    this.creator_id = clip.data[0].creator_id;
    this.embed_url = clip.data[0].embed_url;
    this.game_id = clip.data[0].game_id;
    this.id = clip.data[0].id;
    this.language = clip.data[0].language;
    this.pagination = clip.data[0].pagination;
    this.thumbnail_url = clip.data[0].thumbnail_url;
    this.title = clip.data[0].title;
    this.url = clip.data[0].url;
    this.video_id = clip.data[0].video_id;
    this.view_count = clip.data[0].view_count;
  }
}
