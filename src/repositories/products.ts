import { getInstance } from "@/services/axios";

export type createProducts = {
  name: string;
  quantity: string;
  file: any;
  description: string;
};

export const ProductsRepository = {
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
};
