import { BasePage } from '@/components/basePage/basePage';
import './styles.scss';
import { PageContent } from '@/components/pageContent/pageContent';
import Box from '@mui/material/Box';
import { Button,    TextField } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name:string;
  quantity:string;
  image:string;
  composition:string;
}

export const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
      <BasePage>
        <PageContent >
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

              <TextField
                required
                id="outlined-required"
                label="Photo of product"
                type='file'
                {...register("image", { required: true })}
              />
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