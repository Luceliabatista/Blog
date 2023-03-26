import { DefaultLayout } from "@/components/templates";
import { UsersServices } from "@/services/api/UsersServices";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as styled from "./styles";
import { IUser } from "@/types/user";

export const UserPage = () => {
  const router = useRouter();
  const [data, setData] = useState<IUser>({} as IUser);

  useEffect(() => {
    const userId = router.query?.id as string;
    console.log({ userId });

    if (userId) {
      UsersServices.getById(userId).then((response: any) =>
        setData(response?.data || {})
      );
    }
  }, [router]);

  return (
    <DefaultLayout>
      {router.query?.id && (
        <styled.Container>
          <styled.Card>
            <div>
              <img src="/user.png" alt="Imagem do User" />
              <styled.Details>
                <p>
                  <b>Nome: </b>
                  {data.name}
                </p>
                <p>
                  <b>Email: </b>
                  {data.email}
                </p>
                <p>
                  <b>Username: </b>
                  {data.username}
                </p>
                <p>
                  <b>Celular: </b>
                  {data.phone}
                </p>
                <p>
                  <b>Site: </b>
                  <a href={`https://${data.website}`}>{data.website}</a>
                </p>
                <p>
                  <b>Endereço: </b>
                  {data.address?.street}, {data.address?.suite},{" "}
                  {data.address?.city}, {data.address?.zipcode}
                </p>
              </styled.Details>
            </div>
          </styled.Card>

          <></>
        </styled.Container>
      )}
    </DefaultLayout>
  );
};
