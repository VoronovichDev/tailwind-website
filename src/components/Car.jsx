import React from 'react'
import carImg from '../assets/car.png'

function Car() {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img
                    className="w-[500px] mx-auto my-4"
                    src={carImg}
                    alt="car"
                />
                <div className="flex flex-col justify-center">
                    <p>PREMIUM CARS AVAILABLE</p>
                    <h1>Drive any vehicle you want</h1>
                    <p>
                        1 Month+ Rentals {' \u0026'} Subscriptions The flexible
                        alternative to leasing or buying No commitment{' '}
                        {' \u0026'} no penalties for early exit
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Car
