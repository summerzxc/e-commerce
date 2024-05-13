import React from 'react'

export default function TitleComponent({title}) {
  return (
    <div className='py-5 md:py-[40px] tracking-tight text-[40px] md:text-[100px] leading-[100%] bebas border-y border-[#696969]'>
      {title}
    </div>
  )
}
