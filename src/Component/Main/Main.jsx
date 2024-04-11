import React from 'react'
import Home from '../Home/Home'
import First from '../First_Page/First'
import Second from '../Second_Page/Second'
import Third from '../Third_Page/Third'
import Fourth from '../Fourth_Page/Fourth'
import Fifth from '../Five_Page/Fifth'
import Footer from '../Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Movies from '../Movies/Movies'

export const Main = () => {
    return (
        <>

            {/* <Home />
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Footer /> */}
            <Movies />
        </>
    )
}
