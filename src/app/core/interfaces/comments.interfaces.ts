import { IUser } from './user.interfaces';

export interface IComments {
  id: number;
  comment_title: String;
  comment_text: String;
  post?: any;
  comment_author: IUser;
  comment_date?: Date;
}
