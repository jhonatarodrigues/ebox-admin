import { getInstance } from "@/services/axios";

export const ProductsRepository = {
  getProducts: async () => {
    const instance = getInstance();

    const response = await instance.post("/products");

    return response.data;
  },
};