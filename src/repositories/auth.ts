import { getInstance } from "@/services/axios";

type LoginProps = {
  user: string;
  password: string;
};

export const AuthRepository = {
  login: async ({ user, password }: LoginProps) => {
    const instance = getInstance();

    const response = await instance.post("/users/login", {
      email: user,
      password,
    });

    return response.data;
  },
};
