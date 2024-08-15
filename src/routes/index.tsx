import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";



// --routes
import Login from '@/pages/login/login';
import {Products} from '@/pages/products/products';
import {AddProducts} from '@/pages/addProducts/addProducts';
import useAuthStore from '@/hooks/store/useAuthStore';


const authRoutes = () => (
  <>
    <Route path='/products' Component={Products} />
    <Route path='/products/add' Component={AddProducts} />
  </>
);

function Navigation() {
  const { user } = useAuthStore();

  console.log('Navigation ----', user);
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