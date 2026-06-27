import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
import { DataProvider } from './context/DataContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'
import { AddressProvider } from './context/AddressContext.jsx'

createRoot(document.getElementById('root')).render(

  <ClerkProvider>
    <DataProvider>
      <CartProvider >
        <WishlistProvider>
          <AddressProvider>
            <App />
          </AddressProvider>
        </WishlistProvider>
      </CartProvider>
    </DataProvider>
  </ClerkProvider>

)
