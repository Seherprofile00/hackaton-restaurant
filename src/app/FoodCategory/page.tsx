import React from 'react'
import Image from 'next/image'
import Food01 from "@/app/Public/Food-01.png"
import Food02 from "@/app/Public/Food-02.png"
import Food03 from "@/app/Public/Food-03.png"
import Food04 from "@/app/Public/Food-04.png"

const FoodCategory = () => {
  return (
    <><section className='FoodCategory'>
<div className='FoodCategory-headings'>
        <h2 className='Fod-01-heading'> Food Category</h2>
        <h1 className='Fod-02-heading'>Choose Food Iteam</h1></div>
        <div className='FoodCategory-images'><div className='Fast-food-deal'><h2 className='Fast--deal'>save 30%</h2>
        <h2 className='Fast---deal'>Fast Food Dish</h2></div>
            <Image  className="Food-image-01"src={Food01 } alt="" width={295} height={328}/>
            
            <Image  className="Food-image-01"src={Food02 } alt="" width={304} height={329}/>
            <Image className="Food-image-01" src={Food03} alt=""/>
            <Image  className="Food-image-01" src={Food04 } alt=""/>
            </div></section></>
  )
}

export default FoodCategory