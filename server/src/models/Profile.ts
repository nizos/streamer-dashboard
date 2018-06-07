/*
 * @Author: Nizars
 * @Date: 2018-06-07 11:19:52
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 11:21:41
 */

export class Profile {
  constructor(
    private id: string,
    private login: string,
    private display_name: string,
    private type: string,
    private broadcaster_type: string,
    private description: string,
    private profile_image_url: string,
    private offline_image_url: string,
    private view_count: string,
    private email: string
  ) {}
}
