import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
import Products from '../pages/products/Products'
import SingleProduct from '../pages/singleproduct/SingleProduct'
import Wishlist from '../pages/wishlist/Wishlist'
import Contact from '../pages/contact/Contact'
import ShoppingCart from '../pages/shoppingCart/ShoppingCart'
import About from '../pages/about/About'
import Checkout from '../pages/proced-to-checkout/Checkout'
import ProtectedRoutes from '../router/ProtectedRoutes'
import { SignIn, SignUp } from '@clerk/react'

function AppRoutes() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/products/:id',
          element: <SingleProduct />
        },
        {
          path: '/wishlist',
          element: (<ProtectedRoutes>
            <Wishlist />
          </ProtectedRoutes>
          )
        },
        {
          path: '/cart',
          element: (<ProtectedRoutes>
            <ShoppingCart />
          </ProtectedRoutes>
          )
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/checkout',
          element: (<ProtectedRoutes>
            <Checkout />
          </ProtectedRoutes>
          )
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: "/sign-in/*",
          element: <div className="min-h-screen flex items-center justify-center">
            <SignIn />
          </div>
        },
        {
          path: "/sign-up/*",
          element: <div className="min-h-screen flex items-center justify-center">
            <SignUp />
          </div>
        }
      ]
    }
  ])
  return (<RouterProvider router={router} />)
}

export default AppRoutes;
