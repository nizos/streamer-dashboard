/*
 * @Author: Nizars
 * @Date: 2018-06-07 11:19:59
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 11:22:50
 */

export class IdToken {
  constructor(
    private access_token: string,
    private expires_in: string,
    private id_token: string,
    private scope: string
  ) {}
}
