import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatlistComponent } from './components/chatlist/chatlist.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceiverFilterPipe } from 'src/app/shared/receiver-filtr';
import { ChatRoutingModule } from './chat-rounting.module';

@NgModule({
  declarations: [ChatlistComponent, ReceiverFilterPipe],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class ChatModule {}
