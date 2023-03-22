import { CardTitle } from "@/components/atoms";
import { ICard } from "./types";

export const Card = ({ post }: ICard) => {
  return (
    <div>
      <div>
        <CardTitle>{post.title}</CardTitle>
      </div>
    </div>
  );
};
