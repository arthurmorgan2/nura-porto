"use client"

import Image from 'next/image'
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton';
import Infobox from './Infobox';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='ml-5'>
                <li className='list-disc pl-2'>Javascript</li>
                <li className='list-disc pl-2'>React/NextJS</li>
                <li className='list-disc pl-2'>TailwindCSS</li>
                <li className='list-disc pl-2'>Laravel</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='ml-5'>
                <li className='list-disc pl-2'>SMA Negeri 5 Yogyakarta</li>
                <li className='list-disc pl-2'>D3 Manajemen Informatika Universitas Amikom Yogyakarta</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='ml-5'>
                <li className='list-disc pl-2'>Junior Web Developer at Geschool</li>
                <li className='list-disc pl-2'>Junior Web Developer at Kunstlab</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id='about' className='text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 p-8 gap-8 rounded-lg'>
                <div className='flex flex-row items-center justify-center h-[300px]'>
                    <Image
                        alt='About Me Img'
                        src={"/images/logo.png"}
                        height={300}
                        width={300}
                    />
                </div>
                <div className='about-me'>
                    <div className='font-bold text-xl md:text-2xl py-4'>
                        About Me
                    </div>
                    <div className='font-normal text-lg md:text-base'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis fugit aliquid porro nulla explicabo dolorum esse dignissimos quis, nam, nisi, repellat quasi doloribus quas perferendis voluptatibus veniam facilis libero architecto.
                    </div>
                    <div className="flex flex-row mt-4 justify-start">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} >
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} >
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"} >
                            Experience
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection