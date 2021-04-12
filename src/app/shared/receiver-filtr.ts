import { IMessage } from '../core/interfaces/message.interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'receiverFilter',
})
export class ReceiverFilterPipe implements PipeTransform {
  transform(receiver: Array<IMessage>, searchTerm: string): Array<IMessage> {
    if (!receiver || !searchTerm) {
      return receiver;
    }
    return receiver.filter(
      (receiver) =>
        receiver.receiver.username
          .toLocaleLowerCase()
          .indexOf(searchTerm.toLocaleLowerCase()) !== -1
    );
  }
}
