/* eslint-disable @next/next/no-css-tags */
"use client"
import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaInstagram, FaXingSquare, FaGithub  } from "react-icons/fa";
import Navbar from "../navbar/navbar"
 





 import { TypeAnimation } from 'react-type-animation';

export default function page() {

  return (
    
    <section className='flex justify-center items-center   bg-slate-800 min-h-screen '>

        <div className="hero">
  <div className="hero-content text-center ">
  <Navbar />

    <div className="max-w-md text-white">

    <TypeAnimation
      sequence={[
        'Servus, ich bin ',
        2000,  
        'Hi, I am ',
        2000,
        'Bonjour, je suis  ',
        2000,
        'Hola, Yo soy ',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className=' text-teal-500'

    />

    <h1 className='text-3xl uppercase   '>Dorbane Abderrahmen</h1>
 
      <p className="py-6 opacity-70">I am deeply motivated by my passion for developing websites that deliver exceptional user experiences. Proficient in Next.js, React.js, JavaScript, TypeScript, and Tailwind CSS.



      </p>
      <a href="/about">
      <button className="btn   bg-teal-600 py-3 px-14  hover:scale-110 hover:font-semi-bold  rounded-full  shadow-md hover:shadow-white " > About Me  </button>

      </a>
    </div>


  </div>
     <div className='flex space-x-7  mt-10 items-center justify-center cursor-pointer'>
       <a href="https://www.facebook.com/siik.ham?mibextid=ZbWKwL " 
target="_blank">
  <FaFacebook className='size-5 text-white hover:scale-125'/>
       </a>
  
  
   <a  href='https://www.linkedin.com/in/dorbane-abderrahmen-78133a279/' 
  target='_blank'>

   
   <FaLinkedin  className='size-5 text-white hover:scale-125'/>
  </a>
  <a  href="https://www.instagram.com/abdou_drr/              "
  target="_blank">
  <FaInstagram  className='size-5 text-white hover:scale-125'  />
  </a>

  <a  href='https://www.xing.com/profile/Dorbane_Abderrahmen/web_profiles?expandNeffi=true'
  target='_blank'>
<FaXingSquare className='size-5 text-white hover:scale-125' 
 
 />
  </a >
  
  <a   href='https://github.com/Abderrahmendr' target='_blank'
 >
  <FaGithub className='size-5 text-white hover:scale-125' />
  </a>

  </div>
</div>
        
         
        </section>
  )
}
