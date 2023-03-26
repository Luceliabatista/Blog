import { IPost } from "@/types/post";

export interface ICard {
  post: IPost;
  onClick?: (post: IPost) => void;
}
