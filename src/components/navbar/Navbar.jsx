import { useCallback, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { IoCartOutline } from 'react-icons/io5';
import { RiMapPinLine } from 'react-icons/ri';
import { FaCaretDown, FaHeart } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { useMyContext } from '../../context/DataContext';
import { useCartContext } from '../../context/CartContext';
import { useAddressContext } from '../../context/AddressContext';
import { useWishlistContext } from '../../context/WishlistContext';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import ResponsiveMenu from '../responsive_menu/ResponsiveMenu';


const Navbar = () => {
    const { search, setSearch } = useMyContext();
    const { location, getLocation, openDropDown, setOpenDropeDown } = useAddressContext()
    const { cartItem } = useCartContext()
    const { wishlistItem } = useWishlistContext()

    const [showNav, setShowNav] = useState(false)

    // const toggleMenue = () => {
    //     setShowNav(!showNav);
    // }

    const toggleMenu = useCallback(()=>{
        setShowNav(prev => !prev)
    },[])

    console.log("Navebar render...")

    const toggleLocationDropDown = useCallback(() => {
        setOpenDropeDown(prev => !prev);

    },[setOpenDropeDown])


    return (
        <div className=' bg-white py-3 shadow-2xl z-50 '>
            <div className='w-full mx-auto flex justify-between px-2 items-center relative'>
                {/* Logo section */}

                <div className='flex gap-7 items-center w-[20%] '>
                    <Link to='/'><h1 className='font-bold text-3xl'><span className='text-[#7c3aed] font-serif'>Z</span>aptro</h1></Link>

                    <div className='hidden md:flex gap-1 cursor-pointer text-gray-700 items-center'>
                        <RiMapPinLine className='text-[#7c3aed]' />
                        <span className='font-semibold'>{location ? <div className='-space-y-2'>
                            <p>{location.country},
                                {location.city}
                            </p>
                        </div> : "Add Address"}</span>
                        <FaCaretDown onClick={toggleLocationDropDown} className='text-[#7c3aed]' />
                    </div>
                    {
                        openDropDown ?
                            <div className='hidden lg:flex flex-col w-62.5 h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md'>
                                <h3 className='font-semibold mb-4 text-xl flex justify-between'>Change Location <span onClick={toggleLocationDropDown}><CgClose />
                                </span> </h3>

                                <button onClick={getLocation} className='bg-[#7c3aed] text-white px-3 rounded-md py-1 cursor-pointer hover:bg-purple-400'>Detect loc...</button>

                            </div>
                            : null
                    }
                </div>


                {/* Menu section */}
                <div className=' w-[43%] md:w-[50%] h-9.5 border-2 border-gray-400 rounded-lg overflow-hidden'>
                    <Link to='/products'>
                        <input type="search"
                            placeholder='Search...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}

                            className='w-full h-full px-3 outline-none'
                        />
                    </Link>


                </div>

                <div className=' w-[20%] relative flex gap-4 md:gap-7 items-center justify-center'>
                    <Link to='/wishlist' className='relative hidden lg:flex'>
                        <FaHeart className='h-10 w-10 bg-gray-100 hover:bg-gray-200 p-2 rounded-full text-red-500' />
                        <span className='bg-[#7c3aed] px-2 rounded-full absolute -top-3 -right-3 text-white'>{wishlistItem.length}</span>
                    </Link>
                    <Link to='/cart' className='relative'>
                        <IoCartOutline className='h-10 w-10 bg-gray-100 hover:bg-gray-200 p-2 rounded-full' />
                        <span className='bg-[#7c3aed] px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span>
                    </Link>



                    <div className='md:hidden'>
                        {
                            showNav ? <RxCross1 onClick={toggleMenu} className='text-2xl' /> :<RxHamburgerMenu onClick={toggleMenu} className='text-2xl'/> 
                          
                        }

                    </div>

                    <div className='hidden md:flex lg:flex'>
                        <Show when="signed-out" className=''>
                            <SignInButton className='bg-[#7c3aed] text-white px-3 py-1 rounded-md mx-3 ' />
                            <SignUpButton className='mx-3' />
                        </Show>
                        <Show when="signed-in">
                            <UserButton />
                        </Show>
                    </div>
                </div>

                {/* Mobile Menu */}

                
            </div>
           <ResponsiveMenu showNav={showNav} setShowNav={setShowNav} onClick={toggleMenu}/>
        </div>
    )
}

export default Navbar
