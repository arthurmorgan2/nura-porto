import Link from 'next/link'
import React from 'react'

const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className='block py-4 px-0 md:py-0 md:px-4 text-[#ADB7BE] rounded hover:text-white'>
            {title}
        </Link>
    )
}

export default NavLink