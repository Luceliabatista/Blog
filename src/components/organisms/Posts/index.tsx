import { Card } from "@/components/molecules";
import * as styled from "./styles";
import { PostsServices } from "@/services/api/PostsServices";
import { useEffect, useState } from "react";
import { IDetalhePost } from "@/services/api/types";

export const Posts = () => {
  const [data, setData] = useState<IDetalhePost[]>([]);

  useEffect(() => {
    PostsServices.getAll().then((response: any) =>
      setData(response?.data || [])
    );
  }, []);

  return (
    <styled.Section>
      {data.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </styled.Section>
  );
};
