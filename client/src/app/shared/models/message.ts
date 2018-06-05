/*
 * @Author: Nizars
 * @Date: 2018-06-05 02:16:45
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-05 02:17:44
 */

import {User} from './user';
import {Action} from './action';

export interface Message {
    from?: User;
    content?: any;
    action?: Action;
}
