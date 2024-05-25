import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductsList from '../feature/productList/pages/ProductsList'

const RoutesComp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductsList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComp
