import { ProductsModel } from "@/model/products";
import { ProductsRepository } from "@/repositories/products";

interface UseProductsProps {
  getProducts: () => Promise<ProductsModel[]>;
}

export const useProducts = (): UseProductsProps => {
  const getProducts = async () => {
    return ProductsRepository.getProducts();
  };

  return {
    getProducts,
  };
};
