/*
 * @Author: Nizars
 * @Date: 2018-06-18 11:50:36
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 11:53:36
 */

// model for Game Analytics
class BaseGameAnalytics {
  public game_id: string;
  public URL: string;

  constructor(game_id: string, URL: string) {
    this.game_id = game_id;
    this.URL = URL;
  }
}

export class GameAnalytics implements BaseGameAnalytics {
  public game_id: string;
  public URL: string;

  constructor(gameAnalytics: any) {
    this.game_id = gameAnalytics.data[0].game_id;
    this.URL = gameAnalytics.data[0].URL;
  }
}
