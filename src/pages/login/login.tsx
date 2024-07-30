import React from "react";
import "./styles.scss";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import ImageLogo from '../../assets/image/logo.png';

export default function Login() {
  return (
    <div className="loginPage">
      
      <div className="box">
        <img src={ImageLogo} alt="Logo" />
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button variant="contained" color="primary">Login</Button>
        </form>
      </div>
    </div>
  );
}