/*
 * @Author: Nizars
 * @Date: 2018-06-18 11:47:44
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 11:49:50
 */

// model for Game
class BaseGame {
  public box_art_url: object;
  public id: string;
  public name: string;

  constructor(box_art_url: object, id: string, name: string) {
    this.box_art_url = box_art_url;
    this.id = id;
    this.name = name;
  }
}

export class Game implements BaseGame {
  public box_art_url: object;
  public id: string;
  public name: string;

  constructor(game: any) {
    this.box_art_url = game.data[0].box_art_url;
    this.id = game.data[0].id;
    this.name = game.data[0].name;
  }
}
