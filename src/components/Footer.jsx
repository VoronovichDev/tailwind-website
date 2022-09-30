import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaLinkedin,
} from 'react-icons/fa'

function Footer() {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-1xl font-bold text-[#8cecff] sm:text-2xl md:text-3xl">
                    TAILWIND REACT CARS
                </h1>
                <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum ea maxime sapiente natus minima ex nam.
                </p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaFacebookSquare size={30} />
                    <FaInstagramSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaLinkedin size={30} />
                </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-y-8 gap-x-4 md:flex justify-between mt-6">
                <div>
                    <h5 className="font-medium text-gray-500">
                        More information
                    </h5>
                    <ul>
                        <li className="py-2 text-sm">Contact us</li>
                        <li className="py-2 text-sm">Mobile app</li>
                        <li className="py-2 text-sm">Find a rental location</li>
                        <li className="py-2 text-sm">Green policy</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-medium text-gray-500">
                        Business Center
                    </h5>
                    <ul>
                        <li className="py-2 text-sm">Corporate account</li>
                        <li className="py-2 text-sm">Business solutions</li>
                        <li className="py-2 text-sm">Tour operators</li>
                        <li className="py-2 text-sm">Travel agents</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-medium text-gray-500">Company</h5>
                    <ul>
                        <li className="py-2 text-sm">About</li>
                        <li className="py-2 text-sm">Careers</li>
                        <li className="py-2 text-sm">Gold status</li>
                        <li className="py-2 text-sm">Blog</li>
                        <li className="py-2 text-sm">Press</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-medium text-gray-500">Legal</h5>
                    <ul>
                        <li className="py-2 text-sm">Damage Management</li>
                        <li className="py-2 text-sm">Deposit</li>
                        <li className="py-2 text-sm">
                            Security and privacy policy
                        </li>
                        <li className="py-2 text-sm">Terms and conditions</li>
                        <li className="py-2 text-sm">Important information</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
