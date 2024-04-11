import React, { useState } from 'react'

function Fifth() {
    const [visible, setVisible] = useState({});
    const toggleVisibility = (index) => {
        setVisible(previsible => ({
            ...previsible,
            [index]: !previsible[index]
        }))
    }
    return (
        <>
            <div className='h-auto w-full border border-gray-700 bg-black text-white'>
                <div className='w-4/5 m-auto mt-14'>
                    <h1 className='text-5xl font-bold pl-[15rem] mb-10'>Frequently Asked Questions</h1>
                    <div className='h-20 w-full bg-zinc-800 mt-5 flex justify-between items-center px-10' onClick={() => toggleVisibility(0)}>
                        <p className='text-2xl font-bold px-4 pt-4'> What is  Netflix</p>
                        <i className={`fa-solid fa-plus text-4xl transform ${visible[0] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className='h-full w-full bg-zinc-800  border-none mt-1 flex justify-between' onClick={() => toggleVisibility(0)}>
                        <p className={`text-2xl font-bold px-4 pt-4 ${visible[0] ? 'block opacity-100' : 'hidden'}`}>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br />

                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                    </div>



                    <div className='h-20 w-full bg-zinc-800 mt-5 flex justify-between items-center px-10' onClick={() => toggleVisibility(1)}>
                        <p className='text-2xl font-bold px-4 pt-4'> How much does Netflix Cost</p>
                        <i className={`fa-solid fa-plus text-4xl transform ${visible[1] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className='h-full w-full bg-zinc-800  border-none mt-1 flex justify-between' onClick={() => toggleVisibility(1)}>
                        <p className={`text-2xl font-bold px-4 pt-4 ${visible[1] ? 'block opacity-100' : 'hidden'}`}>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
                    </div>


                    <div className='h-20 w-full bg-zinc-800 mt-5 flex justify-between items-center px-10' onClick={() => toggleVisibility(2)}>
                        <p className='text-2xl font-bold px-4 pt-4'> How much does Netflix Cost</p>
                        <i className={`fa-solid fa-plus text-4xl transform ${visible[2] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className='h-full w-full bg-zinc-800  border-none mt-1 flex justify-between' onClick={() => toggleVisibility(2)}>
                        <p className={`text-2xl font-bold px-4 pt-4 ${visible[2] ? 'block opacity-100' : 'hidden'}`}>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                    </div>



                    <div className='h-20 w-full bg-zinc-800 mt-5 flex justify-between items-center px-10' onClick={() => toggleVisibility(3)}>
                        <p className='text-2xl font-bold px-4 pt-4'>How do I cancel?</p>
                        <i className={`fa-solid fa-plus text-4xl transform ${visible[3] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className='h-full w-full bg-zinc-800  border-none mt-1 flex justify-between' onClick={() => toggleVisibility(3)}>
                        <p className={`text-2xl font-bold px-4 pt-4 ${visible[3] ? 'block opacity-100' : 'hidden'}`}>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
                    </div>


                    <div className='h-20 w-full bg-zinc-800 mt-5 flex justify-between items-center px-10' onClick={() => toggleVisibility(4)}>
                        <p className='text-2xl font-bold px-4 pt-4'>What can I watch on Netflix?</p>
                        <i className={`fa-solid fa-plus text-4xl transform ${visible[4] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className='h-full w-full bg-zinc-800  border-none mt-1 flex justify-between' onClick={() => toggleVisibility(4)}>
                        <p className={`text-2xl font-bold px-4 pt-4 ${visible[4] ? 'block opacity-100' : 'hidden'}`}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>



                    <div className='h-20 w-full bg-zinc-800 mt-5 flex justify-between items-center px-10' onClick={() => toggleVisibility(5)}>
                        <p className='text-2xl font-bold px-4 pt-4'>Is Netflix good for Kids?</p>
                        <i className={`fa-solid fa-plus text-4xl transform ${visible[5] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className='h-full w-full bg-zinc-800  border-none mt-1 flex justify-between' onClick={() => toggleVisibility(5)}>
                        <p className={`text-2xl font-bold px-4 pt-4 ${visible[5] ? 'block opacity-100' : 'hidden'}`}>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br />

                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                    </div>

                </div>
                <div>
                    <h1 className='text-2xl mt-8 ml-[25rem]'>Ready to watch? Enter your email to create or restart your membership.</h1>
                </div>
                <div>
                    <input className="bg-transparent h-14 w-[30rem] border border-gray-700 rounded-lg m-6 ml-[27rem] p-3" type='email' placeholder='Email Address' />
                    <button className='h-14 w-48 border border-gray-400 rounded-md bg-red-500 text-2xl font-bold'>Get Started</button>
                </div>
            </div>

        </>
    )
}
export default Fifth
