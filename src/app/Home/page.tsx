import React from 'react'
import Image from 'next/image'
import image01 from "@/app/Public/Image (1).png"

const Home= () => {
  return (
    <section className='Home-main'>
        <div className='Home-hero' >
<div className='Her0'>
<h3 className='Her0-01' >Its Quick & Amusing!</h3>
<h2 className='Her0-02'><span className='Her0-02-01'>Th</span>e Art of speed<br></br>
food Quality</h2>

<p className='Her0-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Varius sed pharetra dictum neque massa congue</p>
<button className='Her0-button'>See Menu</button>
</div>



            <Image src={image01} 
            alt=" "
             width={877}
              height={670} 
              className='Home-image'/>
        
        
        
        
        </div>
    </section>
  )
}

export default Home