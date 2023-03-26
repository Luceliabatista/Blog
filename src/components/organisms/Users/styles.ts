import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 20px;

  table {
    width: 100%;
    max-width: 100%;

    thead th {
      border-bottom: 1px solid #dee3ed;
      padding: 0px 7px 7px;
    }

    tbody tr {
      :hover {
        background: #f1f3f9;
      }
    }
  }
`;
