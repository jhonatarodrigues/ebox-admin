import { useAuthStore } from "@/hooks/store/useAuthStore";
import { useNavigate } from "react-router-dom";

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
    console.log(user, password);
    // setUser(data);

    setUser({
      name: "John Doe",
      email: "asdasdsa@asdas.com",
    });

    Navigate("/products", { replace: true });
  };

  const logout = () => {
    clearUser();
    // setUser(null);
    // navigate("/", { replace: true });
  };

  return {
    login,
    logout,
  };
};
