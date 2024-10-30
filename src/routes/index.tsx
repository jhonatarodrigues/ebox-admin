import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import useAuthStore from '@/hooks/store/useAuthStore';


// --routes
import Login from '@/pages/login/login';
import { Products } from '@/pages/products/products';
import { AddProducts } from '@/pages/addProducts/addProducts';
import { Users } from '@/pages/users/users';
import { AddUser } from '@/pages/addUser/addUser';
import { QRCodeGenerate } from '@/pages/qrcodeGernerate/qrcodeGernerate';


const authRoutes = () => (
  <>
    <Route path='/qrcode' Component={QRCodeGenerate} />

    <Route path='/products' Component={Products} />
    <Route path='/products/add' Component={AddProducts} />

    <Route path='/users' Component={Users} />
    <Route path='/users/add' Component={AddUser} />
  </>
);

function Navigation() {
  const {user}  = useAuthStore((state) => state);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
        { user && authRoutes() }

        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;