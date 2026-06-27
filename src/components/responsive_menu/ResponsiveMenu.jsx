import React from 'react'
import { UserButton, useUser } from '@clerk/react'
import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'

function ResponsiveMenu({ showNav, setShowNav, onClick }) {

    const { user } = useUser()
    console.log(user)
    return (
        <div className={`${showNav ? 'left-0' : '-left-full'} fixed bottom-0 top-0 flex flex-col gap-15 w-[75%] flxe-col z-20 bg-white/95  shadow-md transition-all duraition-300`}>
            <div>
                <div className=' h-15 top-7 flex gap-10 mt-7 ml-7 mr-2 bg-gray-100 rounded-md items-center'>
                    <div className='ml-2'>
                        {
                            user ? <UserButton size={50} /> : <Avatar src="/broken-image.jpg" size={50} />
                        }
                    </div>
                    <div>
                        <h1>Hello, {user?.firstName}</h1>
                        <h1 className='text-sm text-slate-500'>Premium user</h1>
                    </div>
                </div>
            </div>
            <nav className='ml-7 rounded-md mr-2 bg-gray-100'>
                <ul className=''>
                    <Link to='/' onClick={onClick}>
                        <li className='text-xl font-semibold p-2'>Home</li>
                    </Link>
                    <Link to='/wishlist' onClick={onClick}>
                        <li className='text-xl font-semibold p-2'>Wishlist</li>
                    </Link>
                    <Link to='/about' onClick={onClick}>
                        <li className='text-xl font-semibold p-2'>About Us</li>
                    </Link>
                    <Link to='/contact' onClick={onClick}>
                        <li className='text-xl font-semibold p-2'>Contact Us</li>
                    </Link>
                    <Link to='/products' onClick={onClick}>
                        <li className='text-xl font-semibold p-2'>Products</li>
                    </Link>
                    <Link to='/sign-in' onClick={onClick}>
                        <li className='text-xl font-semibold p-2'>Login</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default ResponsiveMenu
