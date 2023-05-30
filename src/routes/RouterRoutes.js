import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ErrorPage from '../pages/ErrorPage';
import  ResetPassword  from '../pages/ResetPassword';
import UpdateProfilePage from '../pages/UpdateProfile';
const RouterRoutes = () => {
    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
                <Route path="/update-profile" element={<UpdateProfilePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;