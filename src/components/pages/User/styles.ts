import styled from "styled-components";

export const Container = styled.div`
  margin: 0 20px 20px 20px;
`;

export const Card = styled.div`
  padding: 10px;
  background: #fbf9f9;
  border-radius: 10px;
  margin-bottom: 20px;

  div {
    display: flex;
    gap: 30px;
    align-items: center;

    img {
      max-height: 150px;
    }
  }
`;

export const PostCommentName = styled.p``;

export const PostCommentEmail = styled.p``;

export const PostCommentBody = styled.p``;
