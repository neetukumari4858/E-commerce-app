import React from 'react'
import {ProductFilter} from '../../Components/Filter/ProductFilter'
import {Navbar} from '../../Components/Navigation/Navbar'
import {ProductList} from '../../Components/ProductList/ProductList'

const ProductPage = () => {
  return (
    <>
      <Navbar/>
      <ProductFilter/>
      <ProductList/>
    </>
  )
}

export {ProductPage} ;