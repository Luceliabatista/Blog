import { useRouter } from "next/router";
import * as styled from "./styles";
import { IUser } from "@/types/user";

export const User = (user: IUser) => {
  const router = useRouter();

  return (
    <tr onClick={() => router.push(`/usuarios/${user.id}`)}>
      <styled.Td>{user.id}</styled.Td>
      <styled.Td>{user.name}</styled.Td>
      <styled.Td>{user.email}</styled.Td>
    </tr>
  );
};
