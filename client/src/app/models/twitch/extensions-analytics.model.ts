/*
 * @Author: Nizars
 * @Date: 2018-06-18 11:42:55
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 11:57:46
 */

// model for Clip
class BaseExtensionAnalytics {
  public extension_id: string;
  public URL: string;

  constructor(extension_id: string, URL: string) {
    this.extension_id = extension_id;
    this.URL = URL;
  }
}

export class ExtensionAnalytics implements BaseExtensionAnalytics {
  public extension_id: string;
  public URL: string;

  constructor(extensionAnalytics: any) {
    this.extension_id = extensionAnalytics.data[0].extension_id;
    this.URL = extensionAnalytics.data[0].URL;
  }
}
