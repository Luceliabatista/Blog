import Image from "next/image";
import Link from "next/link";
import { IDefaultLayout } from "./types";

export const DefaultLayout = ({ children }: IDefaultLayout) => (
  <>
    <header style={{ display: "flex" }}>
      <Image src="/next.svg" alt="Logo" width={100} height={50} />
      <div>
        <Link href="/">Nome do usuario</Link>
      </div>
    </header>
    <main style={{ maxWidth: "300px" }}>{children}</main>
  </>
);
