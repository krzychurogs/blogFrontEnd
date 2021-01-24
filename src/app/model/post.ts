export interface Post {
  id: number;
  entry_title?: string;
  entry_text?: string;
  entry_author?: number;
  entry_date?: Date;
  image?: File;
  likes: any[];
  totalLikes?: number;
}
