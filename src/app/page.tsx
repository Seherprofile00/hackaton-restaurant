import React from 'react'


import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Home/page'
import About from './About-us/page'
import FoodCategory from './FoodCategory/page'
import Choose_us from './Choose-us/page'
import Chefs from './Chef-clientSaying/page'

const page = () => {
  return (<>
    <Header/>
    <Home/>
    <About/>
    <FoodCategory/>
    <Choose_us/>
    <Chefs/>
    <Footer/>
    </> )
}

export default page