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
        setData(response?.data || [])
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
              <h1> Detalhes </h1>
            </div>
          </styled.Card>

          <></>
        </styled.Container>
      )}
    </DefaultLayout>
  );
};
