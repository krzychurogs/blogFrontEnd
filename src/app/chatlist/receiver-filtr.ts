import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '../model/message';

@Pipe({
  name: 'receiverFilter',
})
export class ReceiverFilterPipe implements PipeTransform {
  transform(receiver: Array<Message>, searchTerm: string): Array<Message> {
    if (!receiver || !searchTerm) {
      return receiver;
    }
    return receiver.filter(
      (receiver) =>
        receiver.receiver.user.username
          .toLocaleLowerCase()
          .indexOf(searchTerm.toLocaleLowerCase()) !== -1
    );
  }
}
