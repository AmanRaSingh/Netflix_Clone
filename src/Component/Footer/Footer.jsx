import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='h-[50vh] w-full border border-black bg-black text-white'>
                <div>
                    <h1 className='ml-[9rem] mt-12'>Questions? Call 000-800-919-1694</h1>
                </div>
                <div className='h-[2rem] w-[65vw] flex justify-between ml-[9rem] mt-5'>
                    <p>FAQ</p>
                    <p>Help Centre</p>
                    <p>Account</p>
                    <p>Media Centre</p>
                </div>

                <div className='h-[2rem] w-[65vw] flex justify-between ml-[9rem] mt-5'>
                    <p>Investor Relations</p>
                    <p>Jobs </p>
                    <p>Ways to Watch</p>
                    <p>Terms of Use</p>
                </div>
                <div className='h-[2rem] w-[65vw] flex justify-between ml-[9rem] mt-5'>
                    <p>Privacy</p>
                    <p>Cookies Preferences</p>
                    <p>Corporate Information</p>
                    <p>Contact Us</p>
                </div>
                <div className='h-[2rem] w-[45vw] flex justify-between ml-[9rem] mt-5'>
                    <p>Speed Test</p>
                    <p>Legal Notices</p>
                    <p>Only  on Netflix</p>
                </div>
            </div>

        </>
    )
}
export default Footer