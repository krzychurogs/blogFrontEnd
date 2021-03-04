import { UserData } from './user';
export interface Comments {
  id: number;
  comment_title: String;
  comment_text: String;
  post?: any;
  comment_author: UserData;
  comment_date?: Date;
}
