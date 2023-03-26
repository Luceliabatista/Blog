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
  justify-content: center;
  gap: 30px;
  font-size: 20px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const Search = styled.input`
  max-height: 40px;
  max-width: 200px;
  padding: 5px 15px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid;
  outline: none;
  margin-left: auto;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Login = styled.button`
  max-width: 100px;
  max-height: 50px;
  background: transparent;
  color: #ff7500;
  font-size: 20px;
  border: none;
  outline: none;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
