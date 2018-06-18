/*
 * @Author: Nizars
 * @Date: 2018-06-18 15:00:49
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 16:24:17
 */

import { Injectable } from '@angular/core';

@Injectable()
export class QueryBuilderService {


  // Request URLS
  private TWITCH_API        = 'https://api.twitch.tv/helix/';
  private BITS_LEADERBOARD  = this.TWITCH_API + 'bits/leaderboard?';
  private CLIPS             = this.TWITCH_API + 'clips?';
  private ENTITLEMENTS      = this.TWITCH_API + 'entitlements/upload?';
  private EXTENSIONS        = this.TWITCH_API + 'analytics/extensions?';
  private GAMES             = this.TWITCH_API + 'games?';
  private GAME_ANALYTICS    = this.TWITCH_API + 'analytics/games?';
  private GAMES_TOP         = this.TWITCH_API + 'games/top?';
  private STREAMS           = this.TWITCH_API + 'streams?';
  private STREAMS_METADATA  = this.TWITCH_API + 'streams/metadata?';
  private USERS             = this.TWITCH_API + 'users?';
  private USERS_FOLLOWS     = this.TWITCH_API + 'users/follows?';
  private VIDEOS            = this.TWITCH_API + 'videos?';

  // Constructor
  constructor() { }


  queryBitsLeaderboard(count, period, started_at, user_id) {
    let queryURL = this.BITS_LEADERBOARD;

    // Count
    if (count !== null) {
      if (count >= 1 && count <= 100) {
        queryURL += `count=${count}`;
      } else {
        queryURL += `count=10`;
      }
    } else {
      queryURL += `count=10`;
    }

    // Period
    if (period !== null) {
      if (period === 'day' || 'weeek' || 'month' || 'year' || 'all') {
        queryURL += `&period=${period}`;
      } else {
        queryURL += `&period=all`;
      }
    } else {
      queryURL += `&period=all`;
    }

    // Started at
    if (started_at !== null) {
      queryURL += `&started_at=${started_at}`;
    }

    // User ID
    if (user_id !== null) {
      queryURL += `&user_id=${user_id}`;
    }

    return queryURL;
  }



  queryCreateClip(broadcaster_id, has_delay) {
    let queryURL = this.CLIPS;

    // Broadcaster ID
    if (broadcaster_id !== null) {
      queryURL += `breadcaster_id=${broadcaster_id}`;
    }

    /// Has delay
    if (has_delay !== null) {
      if (has_delay === true || has_delay === false) {
        queryURL += `&has_delay=${has_delay}`;
      }
    }

    return queryURL;
  }


  queryGetClips(broadcaster_id: string, game_id: string, id: string, after: string, before: string, first: number) {
    let queryURL = this.CLIPS;

    // REQUIRED
    // Broadcaster ID
    if (broadcaster_id !== null) {
      queryURL += `breadcaster_id=${broadcaster_id}`;
    }

    // Game ID
    if (game_id !== null) {
      queryURL += `&game_id=${game_id}`;
    }

    // ID
    if (id !== null) {
      queryURL += `&id=${id}`;
    }

    /// Optional
    /// After
    if (after !== null) {
      queryURL += `&after=${after}`;
    }

    /// Before
    if (before !== null) {
      queryURL += `&before=${before}`;
    }

    /// First
    if (first !== null) {
      queryURL += `&first=${first}`;
    }

    return queryURL;
  }

  queryEntitlementGrants(manifest_id: string, type: string) {
    let queryURL = this.ENTITLEMENTS;

    // REQUIRED
    // Manifest ID
    if (manifest_id !== null) {
      queryURL += `manifest_id=${manifest_id}`;
    }

    // Type
    if (type !== null) {
      queryURL += `&type=${type}`;
    }

    return queryURL;
  }

  queryExtensionAnalytics(extension_id: string) {
    let queryURL = this.EXTENSIONS;

    if (extension_id !== null) {
      queryURL += `extension_id=${extension_id}`;
    }

    return queryURL;
  }

  queryGames(id: string, name: string) {
    let queryURL = this.GAMES;

    if (id !== null) {
      queryURL += `id=${id}`;
    }

    if (name !== null) {
      queryURL += `&name=${name}`;
    }

    return queryURL;
  }

  queryGameAnalytics(after: string, first: number, game_id: string) {
    let queryURL = this.GAME_ANALYTICS;

    if (after !== null) {
      queryURL += `after=${after}`;
    }

    if (first !== null) {
      queryURL += `&first=${first}`;
    }

    if (game_id !== null) {
      queryURL += `&game_id=${game_id}`;
    }

    return queryURL;
  }

  queryTopGames(after: string, before: string, first: number) {
    let queryURL = this.GAMES_TOP;

    if (after !== null) {
      queryURL += `after=${after}`;
    }

    if (before !== null) {
      queryURL += `&before=${before}`;
    }

    if (first !== null) {
      queryURL += `&first=${first}`;
    }

    return queryURL;
  }

  queryStreams(after: string, before: string, community_id: string, first: number,
    game_id: string, language: string, user_id: string, user_login: string) {
    let queryURL = this.STREAMS;

    if (after !== null) {
      queryURL += `after=${after}`;
    }

    if (before !== null) {
      queryURL += `&before=${before}`;
    }

    if (community_id !== null) {
      queryURL += `&community_id=${community_id}`;
    }

    if (first !== null) {
      queryURL += `&first=${first}`;
    }

    if (game_id !== null) {
      queryURL += `&game_id=${game_id}`;
    }

    if (first !== null) {
      queryURL += `&first=${first}`;
    }

    if (language !== null) {
      queryURL += `&language=${language}`;
    }

    if (user_id !== null) {
      queryURL += `&user_id=${user_id}`;
    }

    if (user_login !== null) {
      queryURL += `&user_login=${user_login}`;
    }

    return queryURL;
  }

  queryStreamsMetadata(first: number, after: string, before: string, community_id: string,
    game_id: string, language: string, user_id: string, user_login: string) {
    let queryURL = this.STREAMS_METADATA;

    /// OPTIONAL
    /// First
    if (first !== null) {
      queryURL += `&first=${first}`;
    } else {
      queryURL += `&first=20`;
    }

    /// After
    if (after !== null) {
      queryURL += `&after=${after}`;
    }

    /// Before
    if (before !== null) {
      queryURL += `&before=${before}`;
    }

    /// Community ID
    if (community_id !== null) {
      queryURL += `&community_id=${community_id}`;
    }

    /// Game ID
    if (game_id !== null) {
      queryURL += `&game_id=${game_id}`;
    }

    /// Language
    if (language !== null) {
      queryURL += `&language=${language}`;
    }

    /// User ID
    if (user_id !== null) {
      queryURL += `&user_id=${user_id}`;
    }

    /// User Login
    if (user_login !== null) {
      queryURL += `&user_login=${user_login}`;
    }

    return queryURL;
  }

  queryGetUser(id, login) {
    let queryURL = this.USERS;

    // User ID
    if (id !== null) {
      queryURL += `id=${id}`;
    // User Login
    } else {
      queryURL += `login=${login}`;
    }
    return queryURL;
  }

  queryUserFollows(after: string, first: number, from_id: string, to_id: string) {
    let queryURL = this.USERS_FOLLOWS;

    /// From
    if (from_id !== null) {

      // From ID
      queryURL += `from_id=${from_id}`;

      /// After
      if (after !== null) {
        queryURL += `&after=${after}`;
      }

      /// First
      if (first !== null) {
        queryURL += `&first=${first}`;
      }

    } else {

      // To ID
      queryURL += `to_id=${to_id}`;

      /// After
      if (after !== null) {
        queryURL += `&after=${after}`;
      }

      /// First
      if (first !== null) {
        queryURL += `&first=${first}`;
      }
    }

    return queryURL;
  }

  queryUpdateUserDescription(description: string) {
    let queryURL = this.USERS;

    // REQUIRED
    // Description
    if (description !== null) {
      queryURL += `description=${description}`;

    }

    return queryURL;
  }

  queryVideos(id: string, user_id: string, game_id: string, after: string, before: string,
    first: string, language: string, period: string, sort: string, type: string) {
    let queryURL = this.VIDEOS;

    // REQUIRED
    // ID
    if (id !== null) {
      queryURL += `id=${id}`;
    }

    // User ID
    if (user_id !== null) {
      queryURL += `&user_id=${user_id}`;
    }

    // Game ID
    if (game_id !== null) {
      queryURL += `&game_id=${game_id}`;
    }

    /// OPTIONAL
    /// After
    if (after !== null) {
      queryURL += `&after=${after}`;
    }

    /// Before
    if (before !== null) {
      queryURL += `&before=${before}`;
    }

    /// First
    if (first !== null) {
      queryURL += `&first=${first}`;
    }

    /// Language
    if (language !== null) {
      queryURL += `&language=${language}`;
    }

    /// Period
    if (period !== null) {
      queryURL += `&period=${period}`;
    }

    /// Sort
    if (sort !== null) {
      queryURL += `&sort=${sort}`;
    }

    /// Type
    if (type !== null) {
      queryURL += `&type=${type}`;
    }

    return queryURL;
  }

  queryTemp() {
    return this.USERS;
  }
}
