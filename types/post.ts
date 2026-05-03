export interface Post {
  id: number;
  username: string;
  text: string;
  image?: string;
  likes: number;
  comments: number;
}