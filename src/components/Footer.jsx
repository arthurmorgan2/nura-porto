import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (

        <div className="grid grid-cols-3 p-4 mt-6 bg-[#FD3100] bg-opacity-90">
            <div className='flex flex-row items-center justify-center'>
                <div className='text-white text-sm font-semibold'>
                    All rights reserved.
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-3 text-white font-semibold'>
                <div className='text-sm'>
                    Follow me on
                </div>
                <div className='flex flex-row gap-3'>
                    <Link href="https://www.instagram.com/nurakura_/" target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} bounce size="lg" style={{ color: "#ffffff", }} />
                    </Link>
                    <Link href="www.linkedin.com/in/nura-imansyah" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} bounce size="lg" style={{ color: "#ffffff", }} />
                    </Link>
                    <Link href="https://github.com/arthurmorgan2" target='_blank'>
                        <FontAwesomeIcon icon={faGithub} bounce size="lg" style={{ color: "#ffffff", }} />
                    </Link>
                    <Link href="https://github.com/arthurmorgan2" target='_blank'>
                        <FontAwesomeIcon icon={faDiscord} bounce size="lg" style={{ color: "#ffffff", }} />
                    </Link>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='text-white text-sm font-semibold'>Copyright by nurakura.</div>
            </div>

        </div>
    )
}

export default Footer