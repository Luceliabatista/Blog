import Link from "next/link";
import * as styled from "./style";

export const Header = () => (
    <styled.Header>
      <styled.Image src="/logo2.png" alt="Logo" width={60} height={60} />
      <styled.Menu>
        <Link href="/">Home</Link>
        <Link href="/usuarios">Usuários</Link>
        <styled.Search type="search" placeholder="Pesquisar" />
        <styled.Login> | LOGIN</styled.Login>
      </styled.Menu>
    </styled.Header>
);
