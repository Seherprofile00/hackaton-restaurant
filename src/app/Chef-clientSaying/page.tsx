import React from 'react'
import Image from 'next/image'
import Chef01 from "@/app/Public/Chef01.png"
import Chef02 from "@/app/Public/Chef-02.png"
import Chef03 from "@/app/Public/Chef-03.png"
import Chef04 from "@/app/Public/chef-04.png"

const Chefs = () => {
  return (
    <>
    <section >
       <div className='Chef-main'>
         <h2>Chefs</h2>
         <h2 id='Chef-meet'><span id='Chef-meet-span'>Me</span>et Our Chef</h2>
         
         </div>
        <div className='Chef-images'>
            
            <Image src={Chef01} alt=''/>
            <Image src={Chef02} alt=''/>
            <Image src={Chef03} alt=''/>
            <Image src={Chef04} alt=''/>
            
            </div></section></>
  )
}

export default Chefs