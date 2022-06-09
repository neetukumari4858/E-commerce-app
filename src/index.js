import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { makeServer } from './server'
import { CartProvider } from './Context/CartContext'
import { ProductProvider } from './Context/FilterContext'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'

// Call make Server
makeServer()

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
