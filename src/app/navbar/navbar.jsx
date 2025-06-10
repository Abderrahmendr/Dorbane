'use client' 

import React from 'react'
import { IoIosHome } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import Link from 'next/link';
import IconButton from "../home/iconButton"
 

export const navbar = () => {
  return (
<>
  <div className = '   text-white  flex justify-center items-center   lg:-ml-8 lg:mb-10 md:mb-10  '>
  <Link href="/home">

 <IconButton text = " Home "   className = " bg-teal-700 m-2  hover:shadow-md hover:shadow-white rounded-full  flex items-center justify-center p-2">
<IoIosHome   className='bg-teal-700  rounded-full p-2 w-10 h-10 '/>


  </IconButton>
  </Link>


  <Link  href="/about" >

<IconButton text = " About " className = " bg-teal-700 m-2 rounded-full  hover:shadow-md hover:shadow-white  flex items-center justify-center p-2">
<BsFillPersonFill   className='bg-teal-700  rounded-full p-2 w-10 h-10 ' /> 
 </IconButton>

 </Link>
 
 <Link href="/projects">

 <IconButton text = " Projects " className = " bg-teal-700  hover:shadow-md hover:shadow-white  m-2 rounded-full  flex items-center justify-center p-2">
  <GoProjectRoadmap className='bg-teal-700  rounded-full p-2 w-10 h-10 ' href='/projects'/>
 </IconButton>

 </Link>

   </div>
   </>
  )
}
export default navbar