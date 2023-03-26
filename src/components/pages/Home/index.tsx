import { DefaultLayout } from "@/components/templates";
import { PostsServices } from "@/services/api/PostsServices";
import { IPost } from "@/types/post";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as styled from "./styles";

export const HomePage = () => {
  const router = useRouter();
  const [data, setData] = useState<IPost>({} as IPost);

  useEffect(() => {
    const postId = router.query?.id || "1";
     if (postId) {
      PostsServices.getById(postId as string).then((response: any) =>
        setData(response?.data || {})
      );
    }
  }, [router]);

  return (
    <DefaultLayout>
      {data?.id && (
        <styled.Container>
          <styled.Card>
            <styled.Title>{data.title}</styled.Title>
            <div>
              <img src="/post.png" alt="Imagem do post" />
              <p>{data.body}</p>
            </div>
          </styled.Card>

          <h4> Comentários:</h4>
          {data.comments?.map((comment) => (
            <>
              <styled.PostCard>
                <p key={comment.id}>
                  <b>Nome: </b>
                  {comment.name}
                </p>
                <p key={comment.id}>
                  <b>Email: </b>
                  {comment.email}
                </p>
                <p key={comment.id}>
                  {comment.body}
                </p>
              </styled.PostCard>
            </>
          ))}
        </styled.Container>
      )}
    </DefaultLayout>
  );
};
