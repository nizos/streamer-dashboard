/*
 * @Author: Nizars
 * @Date: 2018-06-18 12:03:59
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 12:34:57
 */


// model for Stream Metada
class BaseStreamMetadata {
  public game_id: string;

  public hearthstone: object;

  public hearthstone_broadcaster: object;
  public broadcaster_hero: object;
  public broadcaster_class: string;
  public broadcaster_name: string;
  public broadcaster_type: string;

  public hearthstone_opponent: object;
  public opponent_hero: object;
  public opponent_class: string;
  public opponent_name: string;
  public opponent_type: string;

  public overwatch: object;
  public overwatch_broadcaster: object;
  public overwatch_hero: object;
  public overwatch_ability: string;
  public overwatch_name: string;
  public overwatch_role: string;

  public pagination: string;
  public user_id: string;

  constructor(game_id: string, hearthstone: object, hearthstone_broadcaster: object, broadcaster_hero: object, broadcaster_class: string,
    broadcaster_name: string, broadcaster_type: string, hearthstone_opponent: object, opponent_hero: object, opponent_class: string,
    opponent_name: string, opponent_type: string, overwatch: object, overwatch_broadcaster: object, overwatch_hero: object,
    overwatch_ability: string, overwatch_name: string, overwatch_role: string, pagination: string, user_id: string) {
    this.game_id = game_id;
    this.hearthstone = hearthstone;
    this.hearthstone_broadcaster = hearthstone_broadcaster;
    this.broadcaster_hero = broadcaster_hero;
    this.broadcaster_class = broadcaster_class;
    this.broadcaster_name = broadcaster_name;
    this.broadcaster_type = broadcaster_type;
    this.hearthstone_opponent = hearthstone_opponent;
    this.opponent_hero = opponent_hero;
    this.opponent_class = opponent_class;
    this.opponent_name = opponent_name;
    this.opponent_type = opponent_type;
    this.overwatch = overwatch;
    this.overwatch_broadcaster = overwatch_broadcaster;
    this.overwatch_hero = overwatch_hero;
    this.overwatch_ability = overwatch_ability;
    this.overwatch_name = overwatch_name;
    this.overwatch_role = overwatch_role;
    this.pagination = pagination;
    this.user_id = user_id;
  }
}

export class StreamMetadata implements BaseStreamMetadata {
  public game_id: string;

  public hearthstone: object;

  public hearthstone_broadcaster: object;
  public broadcaster_hero: object;
  public broadcaster_class: string;
  public broadcaster_name: string;
  public broadcaster_type: string;

  public hearthstone_opponent: object;
  public opponent_hero: object;
  public opponent_class: string;
  public opponent_name: string;
  public opponent_type: string;

  public overwatch: object;
  public overwatch_broadcaster: object;
  public overwatch_hero: object;
  public overwatch_ability: string;
  public overwatch_name: string;
  public overwatch_role: string;

  public pagination: string;
  public user_id: string;


  constructor(streamMetadata: any) {
    this.game_id = streamMetadata.data[0].game_id;

    this.hearthstone = streamMetadata.data[0].hearthstone;

    this.hearthstone_broadcaster = streamMetadata.data[0].hearthstone_broadcaster;
    this.broadcaster_hero = streamMetadata.data[0].broadcaster_hero;
    this.broadcaster_class = streamMetadata.data[0].broadcaster_class;
    this.broadcaster_name = streamMetadata.data[0].broadcaster_name;
    this.broadcaster_type = streamMetadata.data[0].broadcaster_type;

    this.hearthstone_opponent = streamMetadata.data[0].prohearthstone_opponentperty;
    this.opponent_hero = streamMetadata.data[0].opponent_hero;
    this.opponent_class = streamMetadata.data[0].opponent_class;
    this.opponent_name = streamMetadata.data[0].opponent_name;
    this.opponent_type = streamMetadata.data[0].opponent_type;

    this.overwatch = streamMetadata.data[0].overwatch;
    this.overwatch_broadcaster = streamMetadata.data[0].overwatch_broadcaster;
    this.overwatch_hero = streamMetadata.data[0].overwatch_hero;
    this.overwatch_ability = streamMetadata.data[0].overwatch_ability;
    this.overwatch_name = streamMetadata.data[0].overwatch_name;
    this.overwatch_role = streamMetadata.data[0].overwatch_role;

    this.pagination = streamMetadata.data[0].pagination;
    this.user_id = streamMetadata.data[0].user_id;
  }
}

