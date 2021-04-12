import { IUser } from './user.interfaces';
export interface IMessage {
  id: number;
  message?: string;
  receiver: IUser;
  sender: IUser;
  timestamp: Date;
}
