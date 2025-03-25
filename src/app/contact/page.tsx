"use client"
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Metadata } from 'next';
import Head from 'next/head'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased" >
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8">
                    Contact Us
                </h1>
                <p className="text-neutral-300 max-w-lg mx-auto my-2 text-sm text-center relative">
                    We are here to help with any questions about our courses, programs or events. Reach out and let us know how we can assist you in  your musical journey.
                </p>

                <form className='flex flex-col'>
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="z-10 relative rounded-lg border border-neutral-800 w-xl h-[60px] p-2 focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="z-10 relative rounded-lg border border-neutral-800 w-xl p-2 h-[130px] focus:ring-2 focus:ring-teal-500 mt-4 bg-neutral-950 placeholder:text-neutral-700"
                    />
                    <button type='submit' className='mt-4 z-10 cursor-pointer px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-300 transition duration-200'>Send Message</button>
                </form>

                <BackgroundBeams />
            </div >
        </>
    )
}

export default page