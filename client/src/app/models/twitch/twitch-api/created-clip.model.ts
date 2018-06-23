/*
 * @Author: Nizars
 * @Date: 2018-06-18 11:28:51
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 11:31:12
 */

// model for Create Clip
class BaseCreatedClip {
  public edit_url: string;
  public id: string;

  constructor(edit_url: string, id: string) {
    this.edit_url = edit_url;
    this.id = id;
  }
}

export class CreatedClip implements BaseCreatedClip {
  public edit_url: string;
  public id: string;

  constructor(createdClip: any) {
    this.edit_url = createdClip.data[0].edit_url;
    this.id = createdClip.data[0].id;
  }
}
