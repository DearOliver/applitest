//app.js

'use strict';

import { Component } from '@angular/core';
import { LoginComponent } from './login';
import { ChatComponent } from './chat';
import { Authentication } from './../services/auth';

@Component({
    selector: 'chat-application',
    directives: [LoginComponent, ChatComponent],
    template: `
  <h1>Ma messagerie instantanée</h1>
  <login-component *ngIf="!auth.isAuthenticated()"></login-component>
  <chat-component *ngIf="auth.isAuthenticated()"></chat-component>
  `
})
export class AppComponent {
    constructor (auth: Authentication) {
        this.auth = auth;
    }
}
