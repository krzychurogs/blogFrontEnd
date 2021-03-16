import { User } from './user';
export interface Comments {
  id: number;
  comment_title: String;
  comment_text: String;
  post?: any;
  comment_author: User;
  comment_date?: Date;
}
