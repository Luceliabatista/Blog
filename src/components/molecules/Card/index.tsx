import { CardTitle } from "@/components/atoms";
import { ICard } from "./types";
import * as styled from "./styles";
import Link from "next/link";
import { CardBody } from "@/components/atoms/CardBody";

export const Card = ({ post, onClick }: ICard) => {
  return (
    <Link href={`/${post.id}`}>
      <styled.Card>
        <CardTitle>{post.title}</CardTitle>
        <CardBody>{post.body}</CardBody>
      </styled.Card>
    </Link>
  );
};
