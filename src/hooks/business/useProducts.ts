import { ProductsModel } from "@/model/products";
import {
  ProductsRepository,
  type createProducts,
} from "@/repositories/products";
import { ToastService } from "@/services/ToastService";

interface UseProductsProps {
  getProduct: (id: string) => Promise<ProductsModel>;
  getProducts: () => Promise<ProductsModel[]>;
  createProducts: (data: createProducts) => Promise<ProductsModel>;
  updateProducts: (data: createProducts) => Promise<ProductsModel>;
  deleteProducts: (id: number) => Promise<ProductsModel>;
}

export const useProducts = (): UseProductsProps => {
  const getProduct = async (id: string) => {
    try {
      const response = await ProductsRepository.getProduct(id);

      return response;
    } catch (error) {
      ToastService.error("Erro ao buscar os produtos");
    }
  };

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

  const updateProducts = async (data: createProducts) => {
    try {
      const response = await ProductsRepository.updateProducts(data);

      return response;
    } catch (error) {
      ToastService.error("Erro ao criar os produtos");
    }
  };

  const deleteProducts = async (id: number) => {
    try {
      const response = await ProductsRepository.deleteProduct(id);

      return response;
    } catch (error) {
      ToastService.error("Erro ao criar os produtos");
    }
  };

  return {
    getProduct,
    getProducts,
    createProducts,
    deleteProducts,
    updateProducts,
  };
};
