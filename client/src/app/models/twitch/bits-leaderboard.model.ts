/*
 * @Author: Nizars
 * @Date: 2018-06-18 11:23:43
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 18:02:34
 */

// model for Bits Leaderboard
class BaseBitsLeaderboard {
  public ended_at: string;
  public rank: string;
  public score: number;
  public started_at: string;
  public total: number;
  public user_id: string;

  constructor(ended_at: string, rank: string, score: number, started_at: string, total: number, user_id: string) {
    this.ended_at = ended_at;
    this.rank = rank;
    this.score = score;
    this.started_at = started_at;
    this.total = total;
    this.user_id = user_id;
  }
}

export class BitsLeaderboard implements BaseBitsLeaderboard {
  public ended_at: string;
  public rank: string;
  public score: number;
  public started_at: string;
  public total: number;
  public user_id: string;

  constructor(leaderboard: any) {
    this.ended_at = leaderboard.data[0].ended_at;
    this.rank = leaderboard.data[0].rank;
    this.score = leaderboard.data[0].score;
    this.started_at = leaderboard.data[0].started_at;
    this.total = leaderboard.data[0].total;
    this.user_id = leaderboard.data[0].user_id;
  }
}
