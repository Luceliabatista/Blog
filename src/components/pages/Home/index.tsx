import { DefaultLayout } from "@/components/templates";
import { Posts } from "@/components/organisms";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const postId = router.query?.id;
    console.log({ postId });
  }, [router]);

  return (
    <DefaultLayout>
      {router.query?.id && <div>POST</div>}
      <Posts />
    </DefaultLayout>
  );
};
