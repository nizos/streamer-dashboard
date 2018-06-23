/*
 * @Author: Nizars
 * @Date: 2018-06-18 11:23:43
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-22 17:35:10
 */

// Model for Leaderboard participant
interface IEntry {
  user_id?: string;
  rank?: number;
  score?: number;

  fromData(entry: Entry): Entry;
  getUserId(): string;
  getRank(): number;
  getScore(): number;
}

export class Entry implements IEntry {
  constructor(public user_id?: string, public rank?: number, public score?: number) {
      this.user_id = user_id || 'user id';
      this.rank = rank || 0;
      this.score = score || 0;
  }

  public fromData(entry: Entry) {
    this.user_id = entry.user_id;
    this.rank = entry.rank;
    this.score = entry.score;
    return this;
  }

  public getUserId() {
    return this.user_id;
  }

  public getRank() {
    return this.rank;
  }

  public getScore() {
    return this.score;
  }
}

// Model for Leaderboard participant
interface IDateRange {
  started_at?: string;
  ended_at?: string;

  fromData(dateRange: DateRange): DateRange;
  getStartedAt(): string;
  getEndedAt(): string;
}

export class DateRange implements IDateRange {
  constructor(public started_at?: string, public ended_at?: string) {
    this.started_at = started_at || 'started at';
    this.ended_at = ended_at || 'ended at';
  }

  public fromData(dataRange: DateRange) {
    this.started_at = dataRange.started_at;
    this.ended_at = dataRange.ended_at;
    return this;
  }

  public getStartedAt() {
    return this.started_at;
  }

  public getEndedAt() {
    return this.ended_at;
  }
}


// model for Bits Leaderboard
interface IBitsLeaderboard {
  entries?: Entry[];
  date_range?: DateRange;
  total?: number;

  getDateRange(): DateRange;

  getStartedAt(): string;

  getEndedAt(): string;

  getTotal(): number;

  getEntry(index: number): Entry;

  getEntryUserId(index: number): string;

  getEntryRank(index: number): number;

  getEntryScore(index: number): number;

  getEntries(): Entry[];

}

export class BitsLeaderboard implements IBitsLeaderboard {
  public entries?: Entry[] = [];
  public date_range?: DateRange;
  public total?: number;

  constructor(entries?: Entry[], date_range?: DateRange, total?: number) {
    this.total = total;
    this.date_range = date_range;
    this.entries = [];
    for (let i = 0; i < this.total; i++) {
      this.entries.push(new Entry().fromData(entries[i]));
    }
  }

  fromData(bitsLeaderboard: BitsLeaderboard) {
    this.total = bitsLeaderboard.total;
    this.date_range = bitsLeaderboard.date_range;
    this.entries = [];
    for (let i = 0; i < this.total; i++) {
      this.entries.push(new Entry().fromData(bitsLeaderboard.entries[i]));
    }
    return this;
  }
  // constructor(leaderboard: BitsLeaderboard) {
  //   this.entries = [];
  //   this.total = leaderboard.total;
  //   this.date_range = leaderboard.date_range;
  //   this.entries = leaderboard.entries;
  // }

  public getDateRange() {
    return this.date_range;
  }

  public getStartedAt() {
    return this.date_range.started_at;
  }

  public getEndedAt() {
    return this.date_range.ended_at;
  }

  public getTotal() {
    return this.total;
  }

  public getEntry(index: number) {
    return this.entries[index];
  }

  public getEntryUserId(index: number) {
    return this.entries[index].user_id;
  }

  public getEntryRank(index: number) {
    return this.entries[index].rank;
  }

  public getEntryScore(index: number) {
    return this.entries[index].score;
  }

  public getEntries() {
    return this.entries;
  }

}
