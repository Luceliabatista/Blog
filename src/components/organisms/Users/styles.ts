import styled from "styled-components";

export const Section = styled.section`
  padding: 20px;

  table {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;

    thead th {
      border-bottom: 1px solid #dee3ed;
      padding: 0px 7px 7px;
      text-align: left;
    }

    tbody tr {
      :hover {
        background: #f1f3f9;
      }
    }
  }
`;
