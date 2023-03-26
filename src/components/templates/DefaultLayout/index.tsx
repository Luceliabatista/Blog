import { IDefaultLayout } from "./types";
import * as styled from "./styles";
import { Header } from "@/components/molecules";
import { Posts } from "@/components/organisms";

export const DefaultLayout = ({ children }: IDefaultLayout) => (
  <>
    <Header />
    <styled.Section>
      <main>{children}</main>
      <styled.Aside>
        <Posts />
      </styled.Aside>
    </styled.Section>
  </>
);
