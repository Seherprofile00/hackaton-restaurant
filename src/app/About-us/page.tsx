import React from 'react'
import Image from 'next/image'
import About_01 from "@/app/Public/About-01.png"
import About_02 from "@/app/Public/About-02.png"
import About_03 from "@/app/Public/About-03.png"

import { IoIosCheckmark } from "react-icons/io";
const About = () => {
  return (
    <>
      <section className='About' >

        <div className='About-main-content'><h6>About us</h6>
          <h3 className='About-main-heading'><span className='About-main-heading-span'>We</span> Create the best<br></br>
            foody product
          </h3>
          <p className='About-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat <br></br>pretium donec id elementum. Ultrices mattis sed vitae<br></br>mus risus.
            Lacus nisi, et ac dapibus sit eu velit in <br></br>consequat.</p>
          <div className='About-main-list'><p>
            <IoIosCheckmark /> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <p>
              <IoIosCheckmark /> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <p>
              <IoIosCheckmark /> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
              <button className='About-button'>Read More</button></div>
        </div>

        <div className='About-images'>
          <Image className="image-01" src={About_01} alt=''></Image>
          <Image className="image-02" src={About_02} alt=''></Image>
          <Image className="image-03" src={About_03} alt=''></Image>
         

        </div></section></>
  )
}

export default About