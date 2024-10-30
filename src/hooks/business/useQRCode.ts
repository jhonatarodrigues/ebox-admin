import { QRCodeModel } from "@/model/qrcode";
import { QRCodeRepository } from "@/repositories/qrcode";
import { ToastService } from "@/services/ToastService";

interface UseQRCodeProps {
  generateQRCode: (
    quantity: number,
    productId: number
  ) => Promise<QRCodeModel[]>;
}

export const useQRCode = (): UseQRCodeProps => {
  const generateQRCode = async (quantity: number, productId: number) => {
    try {
      const response = await QRCodeRepository.generateQRCode(
        quantity,
        productId
      );

      return response;
    } catch (error) {
      ToastService.error("Erro ao gerar os QR Codes");
    }
  };

  return {
    generateQRCode,
  };
};
