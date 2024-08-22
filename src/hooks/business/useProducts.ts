import { ProductsModel } from "@/model/products";
import { ProductsRepository } from "@/repositories/products";
import { ToastService } from "@/services/ToastService";

interface UseProductsProps {
  getProducts: () => Promise<ProductsModel[]>;
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

  return {
    getProducts,
  };
};
