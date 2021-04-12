import { IUserData } from './userdata.interfaces';

export interface IPost {
  id: number;
  entry_title?: string;
  entry_text?: string;
  entry_author?: IUserData;
  entry_date?: Date;
  image?: File;
  likes: any[];
  totalLikes?: number;
}
