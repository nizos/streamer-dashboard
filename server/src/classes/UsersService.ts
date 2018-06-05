/*
 * @Author: Nizars
 * @Date: 2018-06-05 23:24:59
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-05 23:24:59
 */


import { Get, Route, Controller, Tags } from 'tsoa';
import User from './User';

@Route('users')
@Tags('Users')
class UsersService extends Controller {

  @Get()
  public getUsers(): Promise<User[]> {
    const users = [{name: 'John Doe', email: 'test@test.com'}];
    return Promise.resolve(users);
  }

}

export default UsersService;
