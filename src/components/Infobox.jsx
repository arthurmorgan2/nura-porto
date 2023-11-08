"use client"

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Infobox = () => {
    const [hoveredDiv, setHoveredDiv] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredDiv(index);
    };

    const handleMouseLeave = () => {
        setHoveredDiv(null);
    };

    const divs = [
        { id: 1, content: '1000 Views', icon: faEye },
        { id: 2, content: '3 Portofolio', icon: faGithub },
        { id: 3, content: '2342 MMR', icon: faGamepad },
    ];

    return (
        <div className="grid grid-cols-3 text-white md:mx-10 md:my-24 mt-10 h-[100px] lg:gap-24 md:gap-16 gap-8">
            {divs.map((div, index) => (
                <div onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave} key={div.id} className={`flex flex-col items-center justify-center rounded-sm border-y-2 border-gray-500 hover:border-y-0 ${hoveredDiv === index ? 'scale-110' : ''
                        } transition duration-500 hover:bg-[#FD3100]`}>
                    {hoveredDiv === index ? div.content : <FontAwesomeIcon icon={div.icon} size="2xl" />}
                </div>
            ))}
        </div>
    )
}

export default Infobox