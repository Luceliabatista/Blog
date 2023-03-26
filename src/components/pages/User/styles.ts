import styled from "styled-components";

export const Container = styled.div`
  margin: 0 20px 20px 20px;
`;

export const Card = styled.div`
  padding: 10px;
  background: #fbf9f9;
  border-radius: 10px;
  margin-bottom: 20px;

  > div {
    display: flex;
    gap: 30px;
    align-items: center;
    flex-direction: column;

    img {
      max-height: 150px;
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const Details = styled.div`
  font-size: 14px;
`;
