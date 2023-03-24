import { Api } from "./axios-config";
import { TPostsComTotalCount } from "./types";

const getAll = async (): Promise<TPostsComTotalCount | Error> => {
  try {
    const urlRelativa = `/posts`;

    const { data } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
      };
    }

    return new Error("Erro ao listar os Posts.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao listar os Posts."
    );
  }
};

export const PostsServices = {
  getAll,
};
