import { BasePage } from '@/components/basePage/basePage';
import './styles.scss';
import { PageContent } from '@/components/pageContent/pageContent';
import Box from '@mui/material/Box';
import { Button,    TextField } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form"
import { useProducts } from '@/hooks/business/useProducts';
import { createProducts } from '@/repositories/products';
import { ToastService } from '@/services/ToastService';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductsModel } from '@/model/products';

type Inputs = {
  name:string;
  quantity:string;
  file: File;
  composition:string;
}

export const AddProducts = () => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  
  } = useForm<Inputs>()
  const Navigate = useNavigate()
  const { state } = useLocation()
  const [product, setProduct] = useState<ProductsModel>()
  const { createProducts, getProduct, updateProducts } = useProducts()


  useEffect(() => {
    if(state?.id) {
      getProduct(state.id).then((response) => {
        setProduct(response);
        setValue('name', response.title);
        setValue('quantity', response.quantity);
        setValue('composition', response.description);
      });
    }
  }, [])



  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    try {
      const newData: createProducts = {
        name: data.name,
        quantity: data.quantity,
        file: data.file,
        description: data.composition
      }

      if (product?.id) {

        const response  = await updateProducts({...newData, id: product.id});
        if(response.id) {
          ToastService.success('Produto atualizado com sucesso!');
          Navigate('/products')
          return;
        }

      } else {

        const response  = await createProducts(newData);
        if(response.id) {
          ToastService.success('Produto criado com sucesso!');
          Navigate('/products')
          return;
        }
      }

      ToastService.error('houve um erro ao criar/atualizar o produto');
    } catch (error) {
      ToastService.error('houve um erro ao criar o produto');
    }
  }

  return (
    <BasePage>
      <PageContent title='Add Products' >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='rowField'>
            <TextField
              required
              id="outlined-required"
              label="Name"
              {...register("name", { required: true })}
              
            />

            <TextField
              required
              id="outlined-required"
              label="Quantity for product"
              placeholder='250mg / 10ml'
              {...register("quantity", { required: true })}
            />

            {product?.file ? (
              <div className='contentImage' style={{backgroundImage: `url("http://localhost:3000/uploads/${product?.file}")`}}>
                <button onClick={() => setProduct({...product, file: ''})}>X</button>
              </div>
              ) : ( 

              <TextField
                required
                id="outlined-required"
                label="Photo of product"
                type='file'
                {...register("file", { required: true })}
              /> 
            )}
          </div>
          <div className='rowField'>

            <TextField
              multiline
              label="Composition"
              minRows={2}
              fullWidth
              {...register("composition", { required: true })}
              
            />
            
          </div>
          <div className='rowField'>
            <Button variant="contained" color="primary" type='submit'>Salvar</Button>
          </div>
        </Box>
      </PageContent>
    </BasePage>
  )
}