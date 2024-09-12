import { getInstance } from "@/services/axios";

export type createProducts = {
  name: string;
  quantity: string;
  file: any;
  description: string;
  id?: number;
};

export const ProductsRepository = {
  getProduct: async (id: string) => {
    const instance = getInstance();

    const response = await instance.get(`/product/${id}`);

    return response.data;
  },

  getProducts: async () => {
    const instance = getInstance();

    const response = await instance.get("/product");

    return response.data;
  },

  createProducts: async (data: createProducts) => {
    const instance = getInstance();

    var bodyFormData = new FormData();

    bodyFormData.append("title", data.name);
    bodyFormData.append("quantity", data.quantity);
    bodyFormData.append("file", data.file[0]);
    bodyFormData.append("description", data.description);

    const response = await instance.post("/product", bodyFormData);

    return response.data;
  },

  updateProducts: async (data: createProducts) => {
    const instance = getInstance();

    var bodyFormData = new FormData();

    if (!data.id) {
      throw new Error("Erro ao atualizar o produto");
    }

    bodyFormData.append("id", data.id.toString());
    bodyFormData.append("title", data.name);
    bodyFormData.append("quantity", data.quantity);
    bodyFormData.append("file", data.file[0]);
    bodyFormData.append("description", data.description);

    const response = await instance.put("/product", bodyFormData);

    return response.data;
  },

  deleteProduct: async (id: number) => {
    const instance = getInstance();

    const response = await instance.delete(`/product/${id}`);

    return response.data;
  },
};
