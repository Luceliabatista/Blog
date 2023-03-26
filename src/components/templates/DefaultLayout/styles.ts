import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: space-between;

  main {
    max-width: calc(100vw - 350px);
    margin: 20px;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
`;
