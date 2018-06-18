/*
 * @Author: Nizars
 * @Date: 2018-06-17 15:08:57
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-17 19:21:22
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { notEqual } from 'assert';
import { User } from '../../models/twitch/user.model';

@Injectable()
export class TwitchAPIService {

  constructor(private http: HttpClient) { }

  // BITS
  /// GET BITS LEADERBOARD
  getBitsLeaderboard(count: number, period: string, started_at: string, user_id: string) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/bits/leaderboard?';

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

    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.get<any>(url, httpOptions);
  }

  // CLIPS
  /// CREATE CLIP
  createClip(broadcaster_id: string, has_delay: boolean) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/clips?';

    // REQUIRED
    // Broadcaster ID
    if (broadcaster_id !== null) {
      queryURL += `breadcaster_id=${broadcaster_id}`;
    }

    /// OPTIONAL
    /// Has delay
    if (has_delay !== null) {
      if (has_delay === true || has_delay === false) {
        queryURL += `&has_delay=${has_delay}`;
      }
    }

    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.post<any>(url, httpOptions);
  }

  /// GET CLIPS
  getClips(broadcaster_id: string, game_id: string, id: string, after: string, before: string, first: number) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/clips?';

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

    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.get<any>(url, httpOptions);
  }

  // ENTITLEMENTS
  /// CREATE ENTITLEMENT GRANTS UPLOAD URL
  createEntitlementGrantsUploadURL(manifest_id: string, type: string) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/entitlements/upload?';

    // REQUIRED
    // Manifest ID
    if (manifest_id !== null) {
      queryURL += `manifest_id=${manifest_id}`;
    }

    // Type
    if (type !== null) {
      queryURL += `&type=${type}`;
    }



    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.post<any>(url, httpOptions);
  }


  // EXTENSIONS
  /// GET EXTENSION ANALYTICS
  getExtensionAnalytics(extension_id: string) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/analytics/extensions?';

    if (extension_id !== null) {
      queryURL += `extension_id=${extension_id}`;
    }

    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.get<any>(url, httpOptions);
  }

  // GAMES
  /// GET GAMES
  getGames(id: string, name: string) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/games?';

    if (id !== null) {
      queryURL += `id=${id}`;
    }

    if (name !== null) {
      queryURL += `&name=${name}`;
    }

    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.get<any>(url, httpOptions);
  }

  /// GET GAME ANALYTICS
  getGameAnalytics(after: string, first: number, game_id: string) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/analytics/games?';

    if (after !== null) {
      queryURL += `after=${after}`;
    }

    if (first !== null) {
      queryURL += `&first=${first}`;
    }

    if (game_id !== null) {
      queryURL += `&game_id=${game_id}`;
    }

    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.get<any>(url, httpOptions);
  }

  /// GET TOP GAMES
  getTopGames(after: string, before: string, first: number) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/games/top?';

    if (after !== null) {
      queryURL += `after=${after}`;
    }

    if (before !== null) {
      queryURL += `&before=${before}`;
    }

    if (first !== null) {
      queryURL += `&first=${first}`;
    }

    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.get<any>(url, httpOptions);
  }

  // STREAMS
  /// GET STREAMS
  getStreams(after: string, before: string, community_id: string, first: number,
    game_id: string, language: string, user_id: string, user_login: string) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/streams?';

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

    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.get<any>(url, httpOptions);
  }

  /// GET STREAMS METADATA
  getStreamsMetadata(first: number, after: string, before: string, community_id: string,
    game_id: string, language: string, user_id: string, user_login: string) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/streams/metadata?';

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

    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.get<any>(url, httpOptions);
  }

  // USERS
  /// GET USER
  getUser(id: string, login: string): Observable<User> {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/users?';

    // User ID
    if (id !== null) {
      queryURL += `id=${id}`;

    // User Login
    } else {
      queryURL += `login=${login}`;
    }

    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.get<User>(url, httpOptions);
  }

  /// GET USER FOLLOWS
  getUserFollows(after: string, first: number, from_id: string, to_id: string) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/users/follows?';

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


    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.get<any>(url, httpOptions);

  }


  // UPDATE USER DESCRIPTION
  updateUserDescription(description: string) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/users?';

    // REQUIRED
    // Description
    if (description !== null) {
      queryURL += `description=${description}`;

    }

    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.put<any>(url, httpOptions);
  }


  // VIDEOS
  // GET VIDEOS
  getVideos(id: string, user_id: string, game_id: string, after: string, before: string,
    first: string, language: string, period: string, sort: string, type: string) {

    // Query builder
    let queryURL = 'https://api.twitch.tv/helix/videos?';

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

    // CREATE REQUEST
    const token = localStorage.getItem('token');
    const url = queryURL;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    // RETURN RESPONSE
    return this.http.get<any>(url, httpOptions);
  }
}

