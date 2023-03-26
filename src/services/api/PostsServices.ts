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

const getById = async (id: string): Promise<TPostsComTotalCount | Error> => {
  try {
    const urlRelativa = `/posts/${id}`;

    const { data } = await Api.get(urlRelativa);
    const { data: comments } = await Api.get(`/posts/${id}/comments`);

    if (data) {
      return {
        data: {
          ...data,
          comments,
        },
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
  getById,
};
