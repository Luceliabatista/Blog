import styled from "styled-components";

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  align-items: flex-start;
  gap: 0px;

  main {
    max-width: calc(100vw - 350px);
    margin: 20px 0px 20px 20px;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
