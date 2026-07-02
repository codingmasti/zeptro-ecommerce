import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout'
import {Toaster} from 'react-hot-toast'
const Home = lazy(() => import('../pages/home/Home'))
const Products = lazy(() => import('../pages/products/Products'))
const SingleProduct = lazy(() => import('../pages/singleproduct/SingleProduct'))
const Wishlist = lazy(() => import('../pages/wishlist/Wishlist'))
const Contact = lazy(() => import('../pages/contact/Contact'))
const ShoppingCart = lazy(() => import('../pages/shoppingCart/ShoppingCart'))
const About = lazy(() => import('../pages/about/About'))
const Checkout = lazy(() => import('../pages/proced-to-checkout/Checkout'))
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
          element:<Home />
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
  return <><RouterProvider router={router} />
  {/* use hot toast */}
  <Toaster
  position='top-right'
  reverseOrder={false} 
  toastOptions={{duration:2000}}/></>
}

export default AppRoutes;
