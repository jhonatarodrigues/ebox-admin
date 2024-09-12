import { getInstance } from "@/services/axios";
import { create } from "domain";

export type createUser = {
  name: string;
  email: string;
  password: string;
};

export const UserRepository = {
  getUsers: async () => {
    const instance = getInstance();

    const response = await instance.get("/users");

    return response.data;
  },
  deleteUser: async (id: number) => {
    const instance = getInstance();

    const response = await instance.delete(`/users/${id}`);

    return response.data;
  },
  createUser: async (data: createUser) => {
    const instance = getInstance();

    const response = await instance.post("/users", data);

    return response.data;
  },
};
