import React from 'react'
import Econom from '../assets/econom.png'
import Comfort from '../assets/comfort.png'
import Business from '../assets/business.png'
import Card from './Card'

const carsData = [
    {
        id: 1,
        name: 'Econom class',
        photo: Econom,
        price: '60$/day',
        info: {
            transmission: 'Manual transmission',
            air_intake: 'Air condition',
            body_style: 'Hatchback / Sedan',
        },
    },
    {
        id: 2,
        name: 'Comfort class',
        price: '120$/day',
        photo: Comfort,
        info: {
            transmission: 'Automatic transmission',
            air_intake: 'Climate controll',
            body_style: 'Crossover / Sedan',
        },
    },
    {
        id: 3,
        name: 'Business class',
        price: '180$/day',
        photo: Business,
        info: {
            transmission: 'Automatic/CVT transmission',
            air_intake: 'Climate controll',
            body_style: 'Crossover / Hatchback / Sedan',
        },
    },
]

function Cards() {
    return (
        <div className="w-full py-40 px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                {carsData.map((car) => (
                    <Card carInfo={car} key={car.id} />
                ))}
            </div>
        </div>
    )
}

export default Cards
