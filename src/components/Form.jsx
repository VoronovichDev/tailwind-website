import React from 'react'

function Form() {
    return (
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center">
                <div className="lg:col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Personalized deals according to your profile
                    </h1>
                    <p>Sign up for regular car hire deals</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
                        <input
                            className="p-3 flex w-full rounded-md text-black"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <button
                            type="button"
                            className="bg-[#8cecff] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
                        >
                            Subscribe
                        </button>
                    </div>
                    <p>
                        We keep your personal information secure.{' '}
                        <span className="text-[#8cecff] cursor-pointer underline">
                            Read our privacy policy
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Form
