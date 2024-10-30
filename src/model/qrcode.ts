import { ProductsModel } from "./products";

export type QRCodeModel = {
  code: string;
  product_id: number;
  views: number;
  product: ProductsModel;
};
