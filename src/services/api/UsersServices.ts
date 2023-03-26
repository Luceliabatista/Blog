import { Api } from "./axios-config";
import { TUsersComTotalCount } from "./types";

const getAll = async (): Promise<TUsersComTotalCount | Error> => {
  try {
    const urlRelativa = `/users`;

    const { data } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
      };
    }

    return new Error("Erro ao listar os Users.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao listar os Users."
    );
  }
};

const getById = async (id: string): Promise<TUsersComTotalCount | Error> => {
  try {
    const urlRelativa = `/users/${id}`;

    const { data } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
      };
    }

    return new Error("Erro ao listar o usuário.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao listar o usuário."
    );
  }
};

const getByEmail = async (
  email: string
): Promise<TUsersComTotalCount | Error> => {
  try {
    const urlRelativa = `/users?email=${email}`;

    const { data } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
      };
    }

    return new Error("Erro ao listar o usuário.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao listar o usuário."
    );
  }
};

export const UsersServices = {
  getAll,
  getById,
  getByEmail
};
