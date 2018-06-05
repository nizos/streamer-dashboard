/*
 * @Author: Nizars
 * @Date: 2018-06-05 23:29:49
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-05 23:29:49
 */


import { Document } from 'mongoose';
import FashionArticle from './FashionArticle';

interface FashionArticleModel extends FashionArticle, Document {}
export default FashionArticleModel;
