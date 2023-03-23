import Link from "next/link";
import { IDefaultLayout } from "./types";
import * as styled from "./style";
import { Header } from "@/components/molecules";

export const DefaultLayout = ({ children }: IDefaultLayout) => (
  <>
    <Header />
    <styled.Main>{children}</styled.Main>
  </>
);
