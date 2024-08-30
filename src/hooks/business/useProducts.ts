import { ProductsModel } from "@/model/products";
import {
  ProductsRepository,
  type createProducts,
} from "@/repositories/products";
import { ToastService } from "@/services/ToastService";

interface UseProductsProps {
  getProducts: () => Promise<ProductsModel[]>;
  createProducts: (data: createProducts) => Promise<ProductsModel>;
}

export const useProducts = (): UseProductsProps => {
  const getProducts = async () => {
    try {
      const response = await ProductsRepository.getProducts();

      return response;
    } catch (error) {
      ToastService.error("Erro ao buscar os produtos");
    }
  };

  const createProducts = async (data: createProducts) => {
    try {
      const response = await ProductsRepository.createProducts(data);

      return response;
    } catch (error) {
      ToastService.error("Erro ao criar os produtos");
    }
  };

  return {
    getProducts,
    createProducts,
  };
};
