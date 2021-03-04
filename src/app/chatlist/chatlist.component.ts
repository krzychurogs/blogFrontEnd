import { element } from 'protractor';
import { AuthService } from './../services-auth/auth.service';
import { Message } from './../model/message';
import { UserData } from './../model/user';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ChatService } from '../services-chat/chat.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css'],
})
export class ChatlistComponent implements OnInit {
  receiverID: any;
  receiverName: any;
  startId: any;
  senderId: any;
  searchTerm: string = '';
  messages = [];
  messagesSender: Array<Message> = [];
  messagesReceiver: Array<Message> = [];
  records: any;
  sender?: UserData;
  receiver?: UserData;
  @Input()
  private userid: any;
  senderCheckReceiver: boolean = false;
  senderCheckSender: boolean = false;
  listOfUsers: Array<Message> = [];
  myForm: FormGroup;
  @ViewChild(ScrollToBottomDirective)
  scroll?: ScrollToBottomDirective;
  constructor(private service: ChatService, private authService: AuthService) {
    this.getID();
    this.myForm = new FormGroup({
      message: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
  getMessageList() {
    this.service.getListOfChatUsers(this.userid).subscribe((chat: any) => {
      this.listOfUsers = chat;
      this.listOfUsers = this.listOfUsers.filter(
        (element, i) => i === this.listOfUsers.indexOf(element)
      );
      console.log(this.listOfUsers);
      this.startId = this.listOfUsers[0].receiver.id;
      this.getChatMessage(this.startId);
    });
  }
  getChatMessage(id: any) {
    console.log('reci' + id);
    this.messagesReceiver = [];
    this.service.getChatMessage(id).subscribe((chat: any) => {
      this.messages = chat.messages;
      this.senderId = chat.sender.id;
      this.receiverID = chat.receiver.id;
      this.receiverName = chat.receiver.username;
      console.log(chat);
      this.receiver = chat.receiver;
      this.sender = chat.sender;
      //console.log('d' + chat.receiver.id);
      //console.log(chat.messages);

      this.messages.map((message: any) => {
        this.messagesReceiver.push(message);
        // console.log(message.message);
      });
    });
  }
  getID() {
    this.service.getUserID().subscribe((inf: any) => {
      console.log('id' + inf.id);
      this.userid = inf.id;
      this.getMessageList();
    });
  }
  sendMessage() {
    const formData = new FormData();
    for (const key in this.myForm.value) {
      formData.append(key, this.myForm.value[key]);
    }
    formData.append('sender', this.userid);
    formData.append('receiver', this.receiverID);
    this.service.sendMessage(formData).subscribe((data: Message) => {
      console.log(data);
      this.getChatMessage(this.receiverID);
    });
  }
}
