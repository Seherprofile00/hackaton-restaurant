import React from 'react'


import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Home/page'
import About from './About-us/page'
import FoodCategory from './FoodCategory/page'

const page = () => {
  return (<>
    <Header/>
    <Home/>
    <About/>
    <FoodCategory/>
    <Footer/>
    </> )
}

export default page