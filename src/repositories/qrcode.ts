import { getInstance } from "@/services/axios";

export const QRCodeRepository = {
  generateQRCode: async (quantity: number, productId: number) => {
    const instance = getInstance();

    const response = await instance.post(`/qrcode/generate`, {
      quantity_code: quantity,
      product_id: productId,
    });

    return response.data;
  },
};
