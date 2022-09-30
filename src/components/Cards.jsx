import React from 'react'
import Econom from '../assets/econom.png'
import Comfort from '../assets/comfort.png'
import Business from '../assets/business.png'

function Cards() {
    return (
        <div className="w-full py-40 px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl justify-between flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                        className="w-20 mx-auto bg-white -mt-12"
                        src={Econom}
                        alt="econom"
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Econom class
                    </h2>
                    <p className="text-center text-4xl font-bold">60$/day</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b border-slate-300 mx-8 mt-8 break-words">
                            Manual transmission
                        </p>
                        <p className="py-2 border-b border-slate-3000 mx-8 break-words">
                            Air condition
                        </p>
                        <p className="py-2 border-b border-slate-300 mx-8 break-words">
                            Hatchback/Sedan
                        </p>
                    </div>
                    <button
                        className="bg-[#8cecff] w-[200px] rounded-md text-black font-medium my-6 mx-auto px-6 py-3"
                        type="button"
                    >
                        Select
                    </button>
                </div>
                <div className="w-full shadow-xl justify-between flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                        className="w-20 mx-auto bg-white -mt-12"
                        src={Comfort}
                        alt="comfort"
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Comfort class
                    </h2>
                    <p className="text-center text-4xl font-bold">120$/day</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b border-slate-300 mx-8 mt-8 break-words">
                            Automatic transmission
                        </p>
                        <p className="py-2 border-b border-slate-300 mx-8 break-words">
                            Climate controll
                        </p>
                        <p className="py-2 border-b border-slate-300	mx-8 break-words">
                            Crossover/Sedan
                        </p>
                    </div>
                    <button
                        className="bg-[#8cecff] w-[200px] rounded-md text-black font-medium my-6 mx-auto px-6 py-3"
                        type="button"
                    >
                        Select
                    </button>
                </div>
                <div className="w-full shadow-xl justify-between flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                        className="w-20 mx-auto bg-white -mt-12"
                        src={Business}
                        alt="business"
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Business class
                    </h2>
                    <p className="text-center text-4xl font-bold">180$/day</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b border-slate-300 mx-8 mt-8 break-words">
                            Automatic/CVT transmission
                        </p>
                        <p className="py-2 border-b border-slate-300 mx-8 break-words">
                            Climate controll
                        </p>
                        <p className="py-2 border-b border-slate-300	mx-8 break-words">
                            Crossover / Hatchback / Sedan
                        </p>
                    </div>
                    <button
                        className="bg-[#8cecff] w-[200px] rounded-md text-black font-medium my-6 mx-auto px-6 py-3"
                        type="button"
                    >
                        Select
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards
