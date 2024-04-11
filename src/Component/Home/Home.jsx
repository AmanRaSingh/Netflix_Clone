import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <>
            <div className='h-[100vh] w-full'>
                <div className='bg-[url(https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg)] 
                h-full w-full bg-no-repeat bg-cover bg-center brightness-90'>
                    <Navbar />
                    <div className='h-[80vh] w-full flex justify-center items-center'>
                        <div>

                            <p className='text-5xl text-white font-bold'>
                                Unlimited movies, TV shows and more</p>
                            <p className='text-2xl ml-[10rem] text-white p-4'>Watch anywhere. Cancel anytime.</p>
                            <p className='text-2xl ml-10 text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
                            <input className='bg-transparent h-12 w-[30rem] border border-spacing-1 rounded text-white p-3' type='text' placeholder='Email Address' />
                          <Link to={'/category'}><button className='h-12 w-40 bg-red-500 text-2xl rounded text-white mt-5 ml-3'>Get Started</button> </Link>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
