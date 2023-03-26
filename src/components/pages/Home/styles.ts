import styled from "styled-components";

export const Container = styled.div`
  margin: 0 20px 20px 20px;
`;

export const Card = styled.div`
  margin-bottom: 20px;
  background: #fbf9f9;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 20px;

  div {
    display: flex;
    gap: 30px;
    align-items: center;
    flex-direction: column;
  }
  img {
    max-height: 150px;
    margin: 0 auto;
  }

  @media screen and (min-width: 800px) {
    padding: 30px;
    background: #fbf9f9;
    border-radius: 10px;
    margin-bottom: 20px;

    div {
      flex-direction: row;

      img {
        max-height: 150px;
      }
    }
  }
`;
export const Title = styled.h1`
  margin: 0 0 20px 0;
`;


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

