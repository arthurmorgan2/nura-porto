'use client'

import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                            Hello, I'm </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Nura',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web Developer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'KunstLab Crew',
                                1000
                            ]}
                            wrapper="span"
                            speed={30}
                            style={{ fontSize: '1em', display: 'inline-block', marginTop: '1rem' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore tempora, dolorum eos cumque natus at? Consectetur omnis earum odio. Fugiat placeat sit dolorum illo esse id. Quas, cumque accusamus!
                    </p>
                    <div>
                        <button className='w-full sm:w-fit bg-gradient-to-br from-orange-500 to-pink-500 lg:text-xl text-lg font-bold px-8 py-4 rounded-full mr-4 hover:bg-slate-200 text-white mb-4 lg:mb-0'>
                            Hire Me
                        </button>
                        <button className='w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-slate-800 text-white lg:text-xl text-lg font-bold p-1 rounded-ful'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full py-3 px-5'>Download CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg-mt-0">
                    <div className="rounded-full w-500 h-500 overflow-hidden inline-block">
                        <Image
                            src="/images/hero-image.jfif"
                            alt='Hero image'
                            height={300}
                            width={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection