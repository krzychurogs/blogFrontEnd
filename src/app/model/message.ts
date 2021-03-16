import { User } from './user';
export interface Message {
  id: number;
  message?: string;
  receiver: User;
  sender: User;
  timestamp: Date;
}
