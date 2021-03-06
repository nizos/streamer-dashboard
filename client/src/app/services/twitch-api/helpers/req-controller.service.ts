/*
 * @Author: Nizars
 * @Date: 2018-06-18 14:41:29
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 20:08:07
 */

import { Injectable } from '@angular/core';

@Injectable()
export class ReqControllerService {

  /* Constructor */
  constructor() { }

  // Checks if the request fulfills the requirements
  checkGetUser(id, login) {
    let valid = false; // Request validity
    let error = ''; // Validity message

    if (id !== null || login !== null) {
      // A user id or a user login is provided

      if (id !== null) {
        // User id is provided

        if (id !== '') {
          // id is not an empty string
          valid = true;
          error = 'Fulfills get user requirements';

        } else {
          // id is an empty string
          valid = false;
          error = `User id can't be empty`;

        }

      } else {
        // User login is provided

        if (login !== '') {
          // login is not an empty string
          valid = true;
          error = 'Fulfills get user requirements';

        } else {
          // login is an empty string
          valid = false;
          error = `User login can't be empty`;

        }
      }
    } else {
      // Neither an id nor a login is provided
      valid = false;
      error = 'A user id or login must be provided';
    }

    // Return result
    return {
      valid: valid,
      error: error
    };
  }


  checkTemp() {
    const valid = true; // Request validity
    const error = 'Skipped validation'; // Validity message

    return {
      valid: valid,
      error: error
    };
  }
}
