import styled from "styled-components";

export const Container = styled.div`
  margin: 0 20px 20px 20px;
`;

export const Card = styled.div`
  padding: 30px;
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
export const Title = styled.h1`
  margin: 0 0 20px 0;
`;

export const Body = styled.p``;

export const PostCard = styled.div`
  font-size: 14px;
  margin-top: 10px;
  margin-left: 30px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;

  :last-child {
    border: none;
  }
`;

export const PostCommentName = styled.p``;

export const PostCommentEmail = styled.p``;

export const PostCommentBody = styled.p``;
