/*
 * @Author: Nizars
 * @Date: 2018-06-09 06:34:48
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-25 00:20:26
 */

import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert/alert.service';
import { environment } from '../../../environments/environment.dev';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  // LOADING
  public loadingState = false;
  public returnURL: string;

  // CONSTRUCTOR
  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService) { }

  // INITIALIZE
  ngOnInit() {
    this.loadingState = false;
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // SIGN IN
  signIn() {
    this.loadingState = true;

    const signInButton = $(this);
    if (!signInButton.hasClass('is-loading')) {
      signInButton.addClass('is-loading');

      let authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${environment.TWITCH_AUTH.CLIENT_ID}`;
      authUrl += '&redirect_uri=' + encodeURIComponent(environment.TWITCH_AUTH.REDIRECT_URI);
      authUrl += `&response_type=code`;
      authUrl += '&scope=' + encodeURIComponent(environment.TWITCH_AUTH.SCOPES);

        // This opens a popup window
        const authWindow = window.open(authUrl, '_blank', 'width=500,height=600');

        window.addEventListener('message', (msg) => {
          signInButton.removeClass('is-loading');
            authWindow.close(); // This auto-closes the popup
            if (msg.data === 'AUTHCOMPLETE') {
                // SUCCESSFUL AUTH! Go do more things!
            } else {
                // AUTH ERROR! Show an error, prompt for retry etc
            }
        });
    }
}

  // GET LOADING STATE
  loading() {
    return this.loadingState;
  }

  // START LOADING
  loadingStart() {
    this.loadingState = true;
  }

  // STOP LOADING
  loadingStop() {
    this.loadingState = false;
  }

  tabOnShow() {

  }

}
