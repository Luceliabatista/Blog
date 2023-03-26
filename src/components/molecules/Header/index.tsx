import Link from "next/link";
import * as styled from "./styles";

export const Header = () => (
  <styled.Header>
    <Link href="/">
      <styled.Image src="/logo.png" alt="Logo" width={60} height={70} />
    </Link>
    <styled.Menu>
      <Link href="/">Home</Link>
      <Link href="/usuarios">Usuários</Link>
      {/* <styled.Search type="search" placeholder="Pesquisar" />
      <styled.Login> | LOGIN</styled.Login> */}
    </styled.Menu>
  </styled.Header>
);
