/*
 * @Author: Nizars
 * @Date: 2018-06-05 23:29:31
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-05 23:29:31
 */

import Colors from '../enums/Colors';
import BaseArticle from './BaseArticle';
import Sizes from '../enums/Sizes';

interface FashionArticle extends BaseArticle {
  size: Sizes;
  color: Colors;
}

export default FashionArticle;
