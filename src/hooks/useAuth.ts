import { useAuthStore } from "@/hooks/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { AuthRepository } from "@/repositories/auth";
import { ToastService } from "@/services/ToastService";
import { decodeToken } from "react-jwt";

type LoginProps = {
  user: string;
  password: string;
};

interface UseAuthProps {
  login: ({ user, password }: LoginProps) => void;
  logout: () => void;
}

export const useAuth = (): UseAuthProps => {
  const Navigate = useNavigate();

  const { setUser, clearUser } = useAuthStore((state) => state);

  const login = async ({ user, password }: LoginProps) => {
    try {
      const response = await AuthRepository.login({ user, password });

      if (response.token) {
        let user = decodeToken(response.token);

        if (!user) {
          throw new Error("Error on login");
        }

        console.log(user, response);

        setUser({ user, token: response.token });

        Navigate("/products", { replace: true });

        return;
      }

      throw new Error("Invalid user or password");
    } catch (error) {
      ToastService.error("Invalid user or password");
    }
  };

  const logout = () => {
    clearUser();
    Navigate("/", { replace: true });
  };

  return {
    login,
    logout,
  };
};
