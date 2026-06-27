import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import CategoryBar from '../components/categorybar/CategoryBar'

function Layout() {
  return (
    <div>
      <Navbar />
      <CategoryBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
