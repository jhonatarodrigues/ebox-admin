import { getInstance } from "@/services/axios";

export const UserRepository = {
  getUsers: async () => {
    const instance = getInstance();

    const response = await instance.post("/users");

    return response.data;
  },
};
