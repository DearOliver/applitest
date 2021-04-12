//chat.js

'use strict';

import { Component } from '@angular/core';
import { Authentication } from './../services/auth';
import { Chat } from './../services/chat';

@Component({
    selector: 'chat-component',
    template: `
  <ul>
    <li *ngFor="#message of messages">{{ message.username }} : {{ message.content }}</li>
  </ul>
  <form (submit)="sendMessage()">
    <input type="text" [(ngModel)]="message" />
    <button type="submit">Envoyer</button>
  </form>
  `
})
export class ChatComponent {
    constructor (auth: Authentication) {
        this.chat = new Chat('http://localhost:8081', { query: `username=${this.auth.user.username}`});
        this.messages = this.chat.messages;
    }

    sendMessage () {
        this.chat.sendMessage(this.message);
        this.message = null;
    }
}
