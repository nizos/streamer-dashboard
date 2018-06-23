/*
 * @Author: Nizars
 * @Date: 2018-06-18 11:54:10
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 11:57:11
 */

// model for Top Games
class BaseTopGames {
  public box_art_url: object;
  public id: string;
  public name: string;
  public pagination: string;

  constructor(box_art_url: object, id: string, name: string, pagination: string) {
    this.box_art_url = box_art_url;
    this.id = id;
    this.name = name;
    this.pagination = pagination;
  }
}

export class TopGames implements BaseTopGames {
  public box_art_url: object;
  public id: string;
  public name: string;
  public pagination: string;

  constructor(topGames: any) {
    this.box_art_url = topGames.data[0].box_art_url;
    this.id = topGames.data[0].id;
    this.name = topGames.data[0].name;
    this.pagination = topGames.data[0].pagination;
  }
}
