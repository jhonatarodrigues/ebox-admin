interface UseUserProps {
  getUsers: () => Promise<void>;
}

export const useUser = (): UseUserProps => {
  const getUsers = async () => {
    console.log("getUsers");
  };

  return {
    getUsers,
  };
};
