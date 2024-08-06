import { BasePage } from '@/components/basePage/basePage';
import './styles.scss';
import { PageContent } from '@/components/pageContent/pageContent';
import Box from '@mui/material/Box';
import { Button,  TextField } from '@mui/material';
import { useRef } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
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
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
                {...register("exampleRequired", { required: true })}
              />
              
              <Button variant="contained" color="primary" type='submit'>Salvar</Button>
            </div>
          </Box>
        </PageContent>
      </BasePage>
    )
}