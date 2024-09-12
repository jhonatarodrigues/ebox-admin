import { UserModel } from "@/model/user";
import { createUser, UserRepository } from "@/repositories/user";
import { ToastService } from "@/services/ToastService";

interface UseProductsProps {
  getUsers: () => Promise<UserModel[]>;
  createUser: (data: createUser) => Promise<UserModel>;
  deleteUser: (id: number) => Promise<UserModel>;
}

export const useUser = (): UseProductsProps => {
  const getUsers = async () => {
    try {
      const response = await UserRepository.getUsers();

      return response;
    } catch (error) {
      ToastService.error("Erro ao buscar os usuários");
    }
  };

  const createUser = async (data: createUser) => {
    try {
      const response = await UserRepository.createUser(data);

      return response;
    } catch (error) {
      ToastService.error("Erro ao criar os produtos");
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const response = await UserRepository.deleteUser(id);

      return response;
    } catch (error) {
      ToastService.error("Erro ao criar os produtos");
    }
  };

  return {
    getUsers,
    deleteUser,
    createUser,
  };
};
