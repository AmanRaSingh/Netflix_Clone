import React from 'react'
import logo from './logo.png'
export default function Navbar() {

  const signIn = () => {
    const CLIENT_ID = "360117167880-nasot64b60aseko3ergmebi4il4be5ne.apps.googleusercontent.com";
    const REDIRECT_URI = "http://localhost:3000/inbox";
    const SCOPE = "https://mail.google.com/";
    const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;
    window.location.href = AUTH_URL
  }
  return (
    <>
      <div className='h-15 w-full bg-transparent flex justify-between px-8 py-2'>
        <img className='h-[100px]' src={logo} />
        <div>
          <button className='border py-3 px-4 rounded text-white'>English</button>
          <button className=' bg-rose-600 border py-3 px-4 rounded text-white' onClick={signIn}>Sign In</button>
        </div>
      </div>
    </>
  )
}
