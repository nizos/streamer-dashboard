/*
 * @Author: Nizars
 * @Date: 2018-06-18 11:39:55
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 11:57:47
 */

// model for Entitlements Grant
class BaseEntitlementsGrant {
  public url: string;

  constructor(url: string) {
    this.url = url;
  }
}

export class EntitlementsGrant implements BaseEntitlementsGrant {
  public url: string;

  constructor(entitlementsGrant: any) {
    this.url = entitlementsGrant.data[0].url;
  }
}
