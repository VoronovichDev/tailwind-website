import React from 'react'

function Card({ carInfo }) {
    return (
        <div className="w-full shadow-xl justify-between flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
                className="w-20 mx-auto bg-white -mt-12"
                src={carInfo.photo}
                alt="econom"
            />
            <h2 className="text-2xl font-bold text-center py-8">
                {carInfo.name}
            </h2>
            <p className="text-center text-4xl font-bold">{carInfo.price}</p>
            <div className="text-center font-medium">
                <p className="py-2 border-b border-slate-300 mx-8 mt-8 break-words">
                    {carInfo.info.transmission}
                </p>
                <p className="py-2 border-b border-slate-3000 mx-8 break-words">
                    {carInfo.info.air_intake}
                </p>
                <p className="py-2 border-b border-slate-300 mx-8 break-words">
                    {carInfo.info.body_style}
                </p>
            </div>
            <button
                className="bg-[#8cecff] w-[200px] rounded-md text-black font-medium my-6 mx-auto px-6 py-3"
                type="button"
            >
                Select
            </button>
        </div>
    )
}

export default Card
