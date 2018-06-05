/*
 * @Author: Nizars
 * @Date: 2018-06-05 23:29:01
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-05 23:30:52
 */

import ArticleType from '../enums/ArticleType';
import Price from './Price';

interface BaseArticle {
  SKU: string;
  name: string;
  type: ArticleType;
  price: Price;
}

export default BaseArticle;
