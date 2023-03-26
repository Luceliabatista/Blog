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
    const postId = router.query?.id as string;
    console.log({ postId });

    if (postId) {
      PostsServices.getById(postId).then((response: any) =>
        setData(response?.data || [])
      );
    }
  }, [router]);

  return (
    <DefaultLayout>
      {router.query?.id && (
        <styled.Container>
          <styled.Card>
            <styled.Title>{data.title}</styled.Title>
            <div>
              <img src="/logo.png" alt="Imagem do post" />
              <styled.Body>{data.body}</styled.Body>
            </div>
          </styled.Card>

          <h4> Comentários:</h4>
          {data.comments?.map((comment) => (
            <>
              <styled.PostCard>
                <styled.PostCommentName key={comment.id}>
                  <b>Nome: </b>
                  {comment.name}
                </styled.PostCommentName>
                <styled.PostCommentEmail key={comment.id}>
                  <b>Email: </b>
                  {comment.email}
                </styled.PostCommentEmail>
                <styled.PostCommentBody key={comment.id}>
                  {comment.body}
                </styled.PostCommentBody>
              </styled.PostCard>
            </>
          ))}
        </styled.Container>
      )}
    </DefaultLayout>
  );
};
