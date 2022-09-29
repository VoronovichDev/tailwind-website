import React from 'react'
import carImg from '../assets/car.png'

function Car() {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-5">
                <img
                    className="w-[500px] mx-auto my-4"
                    src={carImg}
                    alt="car"
                />
                <div className="flex flex-col justify-center">
                    <p className="text-[#8cecff] block font-bold bg-slate-800 w-max px-6 py-1 rounded-r-lg">
                        PREMIUM CARS AVAILABLE
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Drive any vehicle you want
                    </h1>
                    <p>
                        1 Month+ Rentals {' \u0026'} Subscriptions The flexible
                        alternative to leasing or buying No commitment{' '}
                        {' \u0026'} no penalties for early exit
                    </p>
                    <button
                        type="button"
                        className="bg-black w-48 rounded-md font-medium mx-auto md:mx-0 my-6 py-3 text-[#8cecff]"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Car
