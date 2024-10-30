import { BasePage } from '@/components/basePage/basePage';
import './styles.scss';
import { PageContent } from '@/components/pageContent/pageContent';
import { Box, Button, MenuItem, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useProducts } from '@/hooks/business/useProducts';
import { ProductsModel } from '@/model/products';
import { useQRCode } from '@/hooks/business/useQRCode';
import { QRCodeModel } from '@/model/qrcode';
import Swal from 'sweetalert2';
import { CSVDownload } from "react-csv";

type Inputs = {
  quantity: number;
  product_id: number;
}

export const QRCodeGenerate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const { getProducts } = useProducts();
  const { generateQRCode } = useQRCode();
  const [products, setProducts] = useState<ProductsModel[]>([]);
  const [csvData, setCsvData] = useState<string[][]>([]);

  const generateCSVFile = (qrcode: QRCodeModel[]) => {
    const product = products.filter((product) => product.id === qrcode[0].product_id).pop();

    const data = [
      ["code", "product"],
    ];
    qrcode.map((qrcode) => {
      data.push([qrcode.code, product?.title ?? '']);
    });
    setCsvData(data);
  
    Swal.close();
  }


  const onSubmit = async (data: Inputs) => {
    Swal.showLoading();
    const response = await generateQRCode(data.quantity, data.product_id);

    generateCSVFile(response);
  }


  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <BasePage>
      <PageContent title="Generate QRCode" >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          {csvData.length > 0 && <CSVDownload data={csvData}  />}
          <div className='rowField'>
            <TextField
              required
              id="outlined-required"
              label="Quantidade"
              {...register("quantity", { required: true })}
              
            />


            <TextField
              id="outlined-select-currency"
              select
              label="Produtos"
              size='small'
              {...register("product_id", { required: true })}
            >

                {products.map((product) => (
                  <MenuItem key={product.id} value={product.id}>
                    {product.title}
                  </MenuItem>
                ))}
      
            </TextField>
          </div>
          
          <div className='rowField'>
            <Button variant="contained" color="primary" type='submit'>Gerar</Button>
          </div>
        </Box>
      </PageContent>
    </BasePage>
  )
}