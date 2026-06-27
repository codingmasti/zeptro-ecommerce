import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

export const Button = ({ content, onClick }) => {
    return (
        <button 
        onClick={onClick}
        className="md:px-5 px-3 py-1.5 flex cursor-pointer items-center gap-3 rounded-lg bg-[#7c3aed] hover:scale-105 transition duration-300 font-semibold text-sm md:text-lg text-white shadow-xl shadow-[#7c3aed]/30">
             <FaCartPlus className='text-white hover:scale-150 transition duration-300'  />
            {content}
        </button>
    )
}




export const BlackButton = ({content, onClick}) => {
    return (
        <button 
        onClick={onClick}
        className="mf:px-5 px-3 py-1.5 cursor-pointer flex items-center gap-3 rounded-lg bg-[#7c3aed] hover:scale-105 transition duration-300 font-semibold text-sm md:text-lg text-white shadow-xl shadow-[#7c3aed]/30">
            {content}
        </button>
    )
}
