import { UserData } from './user';
export interface Message {
  id: number;
  message?: string;
  receiver: UserData;
  sender: UserData;
  timestamp: Date;
}
