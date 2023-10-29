import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectsCard = ({ imgUrl, title, description, previewUrl, gitUrl }) => {
    return (
        <div>
            <div className='h-56 lg:h-64 md:h-36 rounded-t-xl relative group' style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:rounded-t-xl transition-transform duration-500">
                    <Link href={previewUrl} target='_blank'>
                        <FontAwesomeIcon className='text-[#ADB7BE] hover:text-white m-2 cursor-pointer' icon={faEye} size='2xl' />
                    </Link>
                    <Link href={gitUrl} target='_blank'>
                        <FontAwesomeIcon className='text-[#ADB7BE] hover:text-white m-2 cursor-pointer' icon={faGithub} size='2xl' />
                    </Link>

                </div>
            </div>
            <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'></div>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#ADB7BE]'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectsCard