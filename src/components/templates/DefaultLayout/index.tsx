import { IDefaultLayout } from "./types";
import * as styled from "./styles";
import { Header } from "@/components/molecules";

export const DefaultLayout = ({ children }: IDefaultLayout) => (
  <>
    <Header />
    <styled.Section>
      <main></main>
      <styled.Aside>{children}</styled.Aside>
    </styled.Section>
  </>
);
