/*
 * @Author: Nizars
 * @Date: 2018-06-18 11:57:40
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 12:03:17
 */

// model for Stream
class BaseStream {
  public community_ids: string[];
  public game_id: string;
  public id: string;
  public language: string;
  public pagination: string;
  public started_at: string;
  public thumbnail_url: string;
  public title: string;
  public type: string;
  public user_id: string;
  public viewer_count: number;

  constructor(community_ids: string[], game_id: string, id: string, language: string, pagination: string, started_at: string,
    thumbnail_url: string, title: string, type: string, user_id: string, viewer_count: number) {
    this.community_ids = community_ids;
    this.game_id = game_id;
    this.id = id;
    this.language = language;
    this.pagination = pagination;
    this.started_at = started_at;
    this.thumbnail_url = thumbnail_url;
    this.title = title;
    this.type = type;
    this.user_id = user_id;
    this.viewer_count = viewer_count;
  }
}

export class Stream implements BaseStream {
  public community_ids: string[];
  public game_id: string;
  public id: string;
  public language: string;
  public pagination: string;
  public started_at: string;
  public thumbnail_url: string;
  public title: string;
  public type: string;
  public user_id: string;
  public viewer_count: number;

  constructor(stream: any) {
    this.community_ids = stream.data[0].community_ids;
    this.game_id = stream.data[0].game_id;
    this.id = stream.data[0].id;
    this.language = stream.data[0].language;
    this.pagination = stream.data[0].pagination;
    this.started_at = stream.data[0].started_at;
    this.thumbnail_url = stream.data[0].thumbnail_url;
    this.title = stream.data[0].title;
    this.type = stream.data[0].type;
    this.user_id = stream.data[0].user_id;
    this.viewer_count = stream.data[0].viewer_count;
  }
}
