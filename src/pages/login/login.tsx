import React from "react";
import "./styles.scss";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import ImageLogo from '../../assets/image/logo.png';
import { Box, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";

  
type Inputs = {
  user:string;
  password:string;
}

export default function Login() {
  const {login} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => login({user: data.user, password: data.password});

  return (
    <div className="loginPage">
      
      <div className="box">
        <img src={ImageLogo} alt="Logo" />
        <form>
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
                label="User"
                {...register("user", { required: true })}
                margin="none"
              />
            </div>
            <div className='rowField'>
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
        </form>
      </div>
    </div>
  );
}