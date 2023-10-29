import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const EmailSection = () => {
    return (
        <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus neque soluta incidunt atque vel omnis, eum sequi non, sit quisquam corrupti accusantium, quia blanditiis necessitatibus officiis ex ipsa deserunt impedit.
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="/">
                        <FontAwesomeIcon className='text-white' icon={faGithub} size='2xl' />
                    </Link>
                    <Link href="/">
                        <FontAwesomeIcon className='text-white' icon={faLinkedin} size='2xl' />
                    </Link>
                </div>
            </div>
            <div>
                <form action="" className='flex flex-col'>
                    <div className="mb-6">
                        <label htmlFor="email" className='text-white mb-2 block text-sm font-semibold'>
                            Your Email
                        </label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' type="email" id='email' name='email' required placeholder='nurakura@gmail.com' />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="subject" className='text-white mb-2 block text-sm font-semibold'>
                            Subject
                        </label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' type="text" id='subject' name='subject' required placeholder='lorem Ipsum' />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className='text-white mb-2 block text-sm font-semibold'>
                            Message
                        </label>
                        <textarea name='message' id='message' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='lorem ipsum' />

                    </div>
                    <button
                        type='submit'
                        className='bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2.5 px-5 rounded-lg w-full'
                    >
                        Send Message
                    </button>


                </form>
            </div>

        </section>
    )
}

export default EmailSection