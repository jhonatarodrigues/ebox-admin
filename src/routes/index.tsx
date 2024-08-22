import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import useAuthStore from '@/hooks/store/useAuthStore';


// --routes
import Login from '@/pages/login/login';
import { Products } from '@/pages/products/products';
import { AddProducts } from '@/pages/addProducts/addProducts';
import { Users } from '@/pages/users/users';


const authRoutes = () => (
  <>
    <Route path='/products' Component={Products} />
    <Route path='/products/add' Component={AddProducts} />

    <Route path='/Users' Component={Users} />
    <Route path='/users/add' Component={AddProducts} />
  </>
);

function Navigation() {
  const {user}  = useAuthStore((state) => state);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
        { user && authRoutes() }
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;