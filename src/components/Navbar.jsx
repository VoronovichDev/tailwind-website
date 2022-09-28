import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
    return (
        <div className="flex text-white justify-between items-center h-24 max-w-[1240px] m-auto px-4">
            <h1 className="w-full text-3xl font-bold text-[#8cecff]">
                TAILWIND-REACT-CARS
            </h1>
            <ul className="flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Recources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div>
                <AiOutlineMenu size={20} />
                <AiOutlineClose size={20} />
            </div>
        </div>
    )
}

export default Navbar
