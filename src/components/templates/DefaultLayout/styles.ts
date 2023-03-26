import styled from "styled-components";

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  gap: 0px;

  main {
    max-width: 100%;
    margin: 20px 0px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 300px;

    main {
      max-width: calc(100vw - 350px);
      margin: 20px 0px 20px 20px;
    }
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 20px;

  @media screen and (min-width: 768px) {
    margin: 0px;
  }
`;
