import * as styled from "./styles";
import { UsersServices } from "@/services/api/UsersServices";
import { useEffect, useState } from "react";
import { IUser } from "@/types/user";
import { User } from "@/components/molecules";

export const Users = () => {
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    UsersServices.getAll().then((response: any) =>
      setData(response?.data || [])
    );
  }, []);

  return (
    <styled.Section>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th># ID</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </tbody>
      </table>
    </styled.Section>
  );
};
