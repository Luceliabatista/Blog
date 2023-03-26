import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 0px;

  max-height: calc(100vh - 300px);
  overflow-y: auto;
`;
