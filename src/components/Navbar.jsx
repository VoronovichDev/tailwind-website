import React from 'react'
// eslint-disable-next-line no-unused-vars
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
            </div>
            <div className="fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300]">
                <h1 className="w-full text-3xl font-bold m-4 text-[#8cecff]">
                    TAILWIND-REACT-CARS
                </h1>

                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Recources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
