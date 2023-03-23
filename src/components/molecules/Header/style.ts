import styled from "styled-components";
import NextImage from "next/image";

export const Header = styled.header`
  display: flex;
  padding: 10px 40px;
  gap: 150px;
  background-color: #00142d;
`;

export const Image = styled(NextImage)`
  padding-top: 10px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  font-size: 20px;
  color: #ffffff;
`;

export const Search = styled.input`
  max-height: 40px;
  max-width: 200px;
  padding: 5px 15px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid;
  outline: none;
`;

export const Login = styled.button`
  max-width: 100px;
  max-height: 50px;
  background: transparent;
  color: #ff7500;
  font-size: 20px;
  border: none;
  outline: none;
`;
export const Main = styled.main`
`;
