import { CardTitle } from "@/components/atoms";
import { ICard } from "./types";
import * as styled from "./styles";

export const Card = ({ post }: ICard) => {
  return (
    <styled.Card>
      <CardTitle>{post.title}</CardTitle>
    </styled.Card>
  );
};
