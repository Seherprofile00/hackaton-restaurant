import React from 'react'
import Image from 'next/image'
import choose_1 from "@/app/Public/choose-1.png"
import choose_2 from "@/app/Public/choose-2.png"
import choose_3 from "@/app/Public/choose-3.png"
import choose_4 from "@/app/Public/choose-4.png"
import choose_5 from "@/app/Public/choose-5.png"
import choose_6 from "@/app/Public/choose-6.png"
import icons from "@/app/Public/Chose-us-icons.png"
import banner from "@/app/Public/Choose-banner.png"
import { PiHamburger } from "react-icons/pi";
import { PiPintGlassBold } from "react-icons/pi";
import { LuCookie } from "react-icons/lu";

const Choose_us = () => {
  return (
   <><section className='Choose-us'>
    <div className='choose-us-images'>
      <Image className='chose-image-01' src={choose_1} alt=''/>
      <Image className='chose-image-02'src={choose_2} alt=''/>
      <Image className='chose-image-03' src={choose_3} alt=''/>
      <Image className='chose-image-04'src={choose_4} alt=''/>
      <Image className='chose-image-05'src={choose_5} alt='' />
      <Image  className='chose-image-06'src={choose_6} alt='' />
 


    </div>
    <div className='ChooseUs-main'><h1 className='Choose-heading-1'>Why Choose us</h1>
    <h1 className='Choose-heading-2'>Exta ordinary taste<br></br>
    And Experienced </h1>
    <p className='Choose-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus.
       Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
      <div className='chose-us-icons'> <PiHamburger id='Hamburger' className='CHose-icons' />
       <LuCookie id='cookie' className='CHose-icons'  />
       <PiPintGlassBold id='glass' className='CHose-icons' />
      <div className='Chose-list'><ul  className='Chose-list'>
        <li>Fast Food</li>
        <li>Lunch</li>
        <li>Dinner</li>
        </ul></div>

       
       </div>
       
       <Image src={banner} alt='' width={403}/>
       
       </div>
   
    
    
    
    </section>
    <section>
    <div className='choseUs-sec-section'>
<Image src={icons} alt='' width={1319} height={247}/>
<ul className='ChoseUs-section-2list'>
  <li>Professional Chefs</li>
  <li>Items Of Food</li>
  <li>Years Of Experienced</li>
  <li>Happy Customers</li>
</ul>
<ul className='ChoseUs-section-3list'>
  <li>420</li>
  <li>320</li>
  <li>30+</li>
  <li>220</li>
</ul>


    </div></section></>
  )
}

export default Choose_us