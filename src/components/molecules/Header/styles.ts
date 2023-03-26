import styled from "styled-components";
import NextImage from "next/image";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 50px 1fr;
  padding: 10px 20px;
  gap: 30px;
  background-color: #00142d;

  @media screen and (min-width: 768px) {
    grid-template-columns: 100px 1fr;
    padding: 10px 40px;
  }
`;

export const Image = styled(NextImage)`
  padding-top: 10px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30px;
  gap: 30px;
  font-size: 20px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;
