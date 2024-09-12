import { BasePage } from '@/components/basePage/basePage';
import './styles.scss';
import { PageContent } from '@/components/pageContent/pageContent';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form"
import { ToastService } from '@/services/ToastService';
import { useNavigate } from 'react-router-dom';
import { createUser } from '@/repositories/user';
import { useUser } from '@/hooks/business/useUser';

type Inputs = {
  name:string;
  email:string;
  password:string;
}

export const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  
  } = useForm<Inputs>()
  const Navigate = useNavigate()
  const { createUser } = useUser();



  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    try {
      const newData: createUser = {
        name: data.name,
        email: data.email,
        password: data.password
      }

      
        const response  = await createUser(newData);
        if(response.id) {
          ToastService.success('Usuário criado com sucesso!');
          Navigate('/users')
          return;
        }
      

      ToastService.error('houve um erro ao criar o usuário');
    } catch (error) {
      ToastService.error('houve um erro ao criar o usuário');
    }
  }

  return (
    <BasePage>
      <PageContent title='Add User' >
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
              label="Email"
              {...register("email", { required: true })}
            />


            <TextField
              required
              id="outlined-required"
              label="Password"
              type='password'
              {...register("password", { required: true })}
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