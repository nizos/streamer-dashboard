/*
 * @Author: Nizars
 * @Date: 2018-06-17 15:08:57
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-22 15:02:04
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';


import { ReqControllerService } from './helpers/req-controller.service';
import { QueryBuilderService } from './helpers/query-builder.service';
import { HeaderBuilderService } from './helpers/header-builder.service';

// Models
import { BitsLeaderboard } from '../../models/twitch/twitch-api/bits-leaderboard.model';
import { Clip } from '../../models/twitch/twitch-api/clip.model';
import { CreatedClip } from '../../models/twitch/twitch-api/created-clip.model';
import { EntitlementsGrant } from '../../models/twitch/twitch-api/entitlements-grant.model';
import { ExtensionAnalytics } from '../../models/twitch/twitch-api/extensions-analytics.model';
import { Game } from '../../models/twitch/twitch-api/game.model';
import { GameAnalytics } from '../../models/twitch/twitch-api/game-analytics.model';
import { TopGames } from '../../models/twitch/twitch-api/top-games.model';
import { Stream } from '../../models/twitch/twitch-api/stream.model';
import { StreamMetadata } from '../../models/twitch/twitch-api/stream-metadat.model';
import { User } from '../../models/twitch/twitch-api/user.model';
import { UserFollows } from '../../models/twitch/twitch-api/user-follows.model';
import { Video } from '../../models/twitch/twitch-api/video.model';


@Injectable()
export class TwitchApiService {

  /**
   * @name constructor
   * @description Creates an instance of a Twitch Api Service.
   * @param http HttpClient
   * @param reqController ReqControllerService
   * @param queryBuilder QueryBuilderService
   * @param headerBuilder HeaderBuilderService
   */
  constructor(
    private http: HttpClient,
    private reqController: ReqControllerService,
    private queryBuilder: QueryBuilderService,
    private headerBuilder: HeaderBuilderService) { }

  /**
   * @name getBitsLeaderboard
   * @description Gets a ranked list of Bits leaderboard information for an authorized broadcaster.
   * @requires scope bits:read
   * @param count number optional
   * @param period string optional
   * @param started_at string optional
   * @param user_id string optional
   * @returns leaderboard Leaderboard
   */
  getBitsLeaderboard(reqData) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryBitsLeaderboard(reqData);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<any>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }

  /**
   * @name createClip
   * @description Creates a clip programmatically. This returns both an ID and an edit URL for the new clip.
   * @param broadcaster_id string
   * @param has_delay boolean
   * @returns createdClip CreatedClip
   */
  createClip(broadcaster_id: string, has_delay: boolean) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryCreateClip(broadcaster_id, has_delay);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<CreatedClip>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }


  /**
   * @name getClips
   * @description Gets clip information by clip ID (one or more), broadcaster ID (one only), or game ID (one only).
   * The response has a JSON payload with a data field containing an array of clip information elements and a pagination
   * field containing information required to query for more streams.
   * @param broadcaster_id string
   * @param game_id string
   * @param id string
   * @param after string
   * @param before string
   * @param first number
   */
  getClips(broadcaster_id: string, game_id: string, id: string, after: string, before: string, first: number) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryGetClips(broadcaster_id, game_id, id, after, before, first);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<Clip>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }


  /**
   * @name createEntitlementGrantsUploadURL
   * @description Creates a URL where you can upload a manifest file and notify users that they have an entitlement.
   * Entitlements are digital items that users are entitled to use. Twitch entitlements are granted to users gratis
   * or as part of a purchase on Twitch.
   * @param manifest_id string
   * @param type string
   */
  createEntitlementGrantsUploadURL(manifest_id: string, type: string) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryEntitlementGrants(manifest_id, type);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.post<EntitlementsGrant>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }


  /**
   * @name getExtensionAnalytics
   * @description Gets a URL that extension developers can use to download analytics reports (CSV files) for their extensions.
   * The URL is valid for 1 minute. For details about analytics and the fields returned, see the Insights & Analytics guide.
   * @param extension_id string
   */
  getExtensionAnalytics(extension_id: string) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryExtensionAnalytics(extension_id);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<ExtensionAnalytics>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }


  /**
   * @name getGames
   * @description Gets game information by game ID or name.
   * The response has a JSON payload with a data field containing an array of games elements.
   * @param id string
   * @param name string
   */
  getGames(id: string, name: string) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryGames(id, name);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<Game>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }

  /**
   * @name getGameAnalytics
   * @description Gets a URL that game developers can use to download analytics reports (CSV files) for their games.
   * The URL is valid for 1 minute. For detail about analytics and the fields returned, see the Insights & Analytics guide.
   * @param after string
   * @param first number
   * @param game_id string
   */
  getGameAnalytics(after: string, first: number, game_id: string) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryGameAnalytics(after, first, game_id);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<GameAnalytics>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }


  /**
   * @name getTopGames
   * @description Gets games sorted by number of current viewers on Twitch, most popular first.
   * The response has a JSON payload with a data field containing an array of games information elements and a pagination
   * field containing information required to query for more streams.
   * @param after string
   * @param before string
   * @param first number
   */
  getTopGames(after: string, before: string, first: number) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryTopGames(after, before, first);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<TopGames>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }


  /**
   * @name getStreams
   * @description Gets information about active streams. Streams are returned sorted by number of current viewers, in descending order.
   * Across multiple pages of results, there may be duplicate or missing streams, as viewers join and leave streams.
   * The response has a JSON payload with a data field containing an array of stream information elements
   * and a pagination field containing information required to query for more streams.
   * @param after string
   * @param before string
   * @param community_id string
   * @param first number
   * @param game_id string
   * @param language string
   * @param user_id string
   * @param user_login string
   */
  getStreams(after: string, before: string, community_id: string, first: number,
    game_id: string, language: string, user_id: string, user_login: string) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryStreams(after, before, community_id, first,
        game_id, language, user_id, user_login);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<Stream>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }

  /**
   * @name getStreamsMetadata
   * @description Gets metadata information about active streams playing Overwatch or Hearthstone.
   * Streams are sorted by number of current viewers, in descending order.
   * Across multiple pages of results, there may be duplicate or missing streams, as viewers join and leave streams.
   * The response has a JSON payload with a data field containing an array of stream information elements and a pagination
   * field containing information required to query for more streams.
   * @param first number
   * @param after string
   * @param before string
   * @param community_id string
   * @param game_id string
   * @param language string
   * @param user_id string
   * @param user_login string
   */
  getStreamsMetadata(first: number, after: string, before: string, community_id: string,
    game_id: string, language: string, user_id: string, user_login: string) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryStreamsMetadata(first, after, before, community_id,
        game_id, language, user_id, user_login);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<StreamMetadata>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }




  /**
   * @name getUserByLogin
   * @description Gets information about a specified Twitch users.
   * The response has a JSON payload with a data field containing an array of user-information elements.
   * @param login string
   */
  getUserByLogin(login: string) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryGetUserByLogin(login);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<any>(queryURL, httpOptions);

    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }

  /**
   * @name getUserById
   * @description Gets information about a specified Twitch users.
   * The response has a JSON payload with a data field containing an array of user-information elements.
   * @param id string
   */
  getUserById(id: string) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryGetUserById(id);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<any>(queryURL, httpOptions);

    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }


  /**
   * @name getUserFollows
   * @description Gets information on follow relationships between two Twitch users.
   * Information returned is sorted in order, most recent follow first.
   * This can return information like “who is lirik following,” “who is following lirik,” or “is user X following user Y.”
   * The response has a JSON payload with a data field containing an array of follow relationship elements and a pagination
   * field containing information required to query for more follow information.
   * @param after string
   * @param first number
   * @param from_id string
   * @param to_id string
   */
  getUserFollows(after: string, first: number, from_id: string, to_id: string) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryUserFollows(after, first, from_id, to_id);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<UserFollows>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }

  /**
   * @name updateUserDescription
   * @description Updates the description of a user specified by a Bearer token.
   * @param description string
   */
  updateUserDescription(description: string) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryUpdateUserDescription(description);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.put<User>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }



  /**
   * @name getVideos
   * @description Gets video information by video ID (one or more), user ID (one only), or game ID (one only).
   * The response has a JSON payload with a data field containing an array of video elements.
   * For lookup by user or game, pagination is available, along with several filters that can be specified as query string parameters.
   * @param id string
   * @param user_id string
   * @param game_id string
   * @param after string
   * @param before string
   * @param first string
   * @param language string
   * @param period string
   * @param sort string
   * @param type string
   */
  getVideos(id: string, user_id: string, game_id: string, after: string, before: string,
    first: string, language: string, period: string, sort: string, type: string) {
    const requestValidity = this.reqController.checkTemp();
    if (requestValidity.valid) {
      // Create request
      const queryURL = this.queryBuilder.queryVideos(id, user_id, game_id, after, before, first, language, period, sort, type);
      const httpOptions = this.headerBuilder.createHeader();
      return this.http.get<Video>(queryURL, httpOptions);
    } else {
      // Throw error
      return throwError(requestValidity.error);
    }
  }
}

