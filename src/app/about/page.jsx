 import React from 'react'
 import Image from 'next/image'
import Navbar from "../navbar/navbar"
import { FaGraduationCap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



function page() {
  return (
    <section className='text-white sm:grid sm:grid-cols-1 overscroll-x-none'>

               {/**CONTAINER */} 

      <div className='container sm:ml-20 sm:w-full   md:grid md:grid-cols-1 md:ml-16    '>
              <div className='flex justify-center items-center top-8 mt-10 mb-10   '>

          <h1 className='uppercase opacity-40 absolute text-7xl font-extrabold mb-4  '>about</h1>
          <h2 className='uppercase mt-8 text-6xl  absolute   flex justify-center items-center  sm:m-4 sm:w-full text-teal-400 font-extrabold '>über mich </h2>

        </div>
                                                           {/**HERO */}

        <div className='Hero'>
        
        <div>
        <Navbar className="absolute mt-8" />

<div className=' -mt-6 items-center justify-center flex relative'>
<Image 
src="/images/Bewerbungsbild.jpg" 
className='rounded-full shadow-lg shadow-white m-6 ml-8 relative flex justify-center items-center'
width={250}
height={150}
alt="My Image" /> 
  </div>
<div className='relative  flex justify-center items-center '>
<span className='  bg-teal-700 text-white px-4 py-3  rounded-full animate-pulse '> Scroll Down </span>  

</div>
        </div>
       
        </div>
                                                           {/** END OF HERO */}

                                                           {/**PERSONAL STORY */}
               {/**PERSONAL INFOS */}
              <div className='about md:grid md:grid-cols-1 '>
                <div>
                  <h1 className="uppercase text-2xl font-semibold w-full m-4 mt-16 flex items-center justify-center">my personal journey</h1>
              

                  {/** PERSONAL INFORMATION*/}

                 <div className='lg:left-32 w-1/2 sm:mb-72   sm:grid sm:grid-cols-1 relative mt-12 sm:w-full md:mb-72  '>
                 <h2 className='uppercase text-xl mb-4 font-semibold'>personal information</h2>
                  <p className='text-wrap sm:w-full'> I am Dorbane Abderrahmen from Algeria, a highly motivated junior frontend developer with a passion for building web projects. With a  skill set that includes Next.js, React.js, JavaScript, Redux, TypeScript, and Tailwind CSS, I am committed to leveraging the latest technologies to create dynamic, user-friendly websites and applications. My enthusiasm for web development drives me to continuously learn and improve, ensuring that my projects are  functional .
                  </p>
                {/** TABLE */}
                <div className=' relative '>
                    
                    <div className='expr absolute sm:left-0 sm:mt-56 -right-96  h-60 w-64  -mt-48 border-white  border-2 bg-slate-700 shadow-lg shadow-white a'>
                    <h1 className='relative     	 top-10  left-16  font-bold text-7xl'>2<span className='text-5xl text-teal-700  -mt-4'>+</span></h1>
                    <p className='relative  flex items-center justify-center text-ellipsis ml-4 uppercase top-10  l  mt-8 font-bold text-xl'> years in coding</p>
  
  
                    </div>
                  </div>
                  {/** END OF TABLE */}
               <div className='mt-6 space-y-3 sm:grid sm:grid-cols-1 sm:space-y-12  pb-10'>
            
              <div className='right-0'>
<div className='  absolute right-32 '>

<h2  className='opacity-60      -mr-20'>Date of Birth:</h2>
              <p className=' absolute font-semibold '>22.05.200</p>

</div>

<div>

<h2 className='opacity-60 right-8 '>Country:</h2>
                <p className='font-semibold '>Algeria</p> 
</div>
              </div>
              <div className='left-0'>
                <div>
                  
              <h2  className='opacity-60 right-8  '>Degree:</h2>
              <p className=' left-0 absolute'>Master (german Language)</p>

                </div>
                <div className=' grid grid-cols-2   ' > 
               <h2  className='opacity-60 right-14  absolute -mt-8 '>Languages: </h2>
               <p className=' right-6 absolute  '>Arabic | German  </p>
               <span className=' right-6 absolute mt-6 '>English | French</span> 
               <span className=' right-14 absolute mt-12 '>Spanish</span> 


              </div>

              </div>
                 
              
               </div>
                 </div>
                {/** END OF PERSONAL INFORMATION*/}
                </div>
                     {/**EXPERIENCE */}
                    
              </div>
              {/**PERSONAL INFOS */}

              {/**STUDY AND EXPERIENCE */}
              <div className='stu '>
                <div className='relative mt-14 text-white'>
                  <h1 className="flex justify-center items-center m-4   text-xl font-semibold bolder uppercase">study and EXPERIENCE</h1>
                  <div className='  relative lg:grid lg:grid-cols-2 sm:grid-cols-1 sm:-left-32'>
                                 {/**RIGHT */}
               <div className=' w-2/3 mt-12  sm:w-full ml-28  '>
               <span className="bg-teal-600 rounded-full p-2  absolute ml-16">2021 - 2023</span>
              <FaGraduationCap size={50} className='bg-teal-600 rounded-full p-2'/>
              <span className="after:w-1 after:h-[200px] relative after:absolute after:-mt-2 after:bg-teal-600 after:left-6"></span>

               <h1 className='uppercase text-xl mb-4    ml-16'>Master’s Degree</h1>
               <p className='mt-10 ml-12  '>German Language and Literature | 
 University of Algiers 2 - Abou EL Kacem Saâdallah -</p>


               </div> 
               <div className='w-2/3 mt-12  sm:w-full   ml-28  '>
               <span className="bg-teal-600 rounded-full p-2  uppercase absolute ml-16">  project</span>
              <FaGraduationCap size={50} className='bg-teal-600 rounded-full p-2'/>
              <span className="after:w-1 after:h-[200px] relative after:absolute after:-mt-2 after:bg-teal-600 after:left-6"></span>

               <h1 className='uppercase text-xl mb-4    ml-16'>Html | css | javascript</h1>
               <p className='mt-10 ml-12  '>I learned the basics of HTML, CSS and JavaScript on my own, building various web applications and styling them based on templates. After this experience, I decided to pursue further learning independently. This motivated me to explore additional frameworks that could enhance my skills.</p>


               </div> 
               <div className='w-2/3 mt-12  sm:w-full   ml-28 '>
               <span className="bg-teal-600 rounded-full p-2  absolute ml-16">2018 - 2021</span>
              <FaGraduationCap size={50} className='bg-teal-600 rounded-full p-2'/>
              <span className="after:w-1 after:h-[200px] relative after:absolute after:-mt-2 after:bg-teal-600 after:left-6"></span>

               <h1 className='uppercase text-xl mb-4    ml-16'>Bachelor’s Degree</h1>
               <p className='mt-10 ml-12  '>German Language and Literature |
 University of Algiers 2 - Abou EL Kacem Saâdallah -</p>


               </div> 
               <div className='w-2/3 mt-12   sm:w-full    ml-28  '>
               <span className="bg-teal-600 rounded-full p-2 uppercase  absolute ml-16">project </span>
              <FaGraduationCap size={50} className='bg-teal-600 rounded-full p-2'/>
              <span className="after:w-1 after:h-[200px] relative after:absolute after:-mt-2 after:bg-teal-600 after:left-6"></span>

               <h1 className='uppercase text-xl mb-4    ml-16'>typescript | Nextjs  </h1>
               <p className='mt-10 ml-12  '>Through many videos on the YouTube platform, I got to know Nextjs &  Typescript a bit, which allowed me to build small apps. It didn't look particularly nice, but it worked. However, I'm always ready to learn something new to develop apps because we use them every day, and I am fascinated by the interaction between the app and the user.

</p>


               </div> 
                                 {/**LEFT */}
               <div className='w-2/3 mt-12  sm:w-full  ml-28 '>
               <span className="bg-teal-600 rounded-full p-2  absolute ml-16"> 2015 - 2018</span>
              <FaGraduationCap size={50} className='bg-teal-600 rounded-full p-2'/>
              <span className="after:w-1 after:h-[200px] relative after:absolute after:-mt-2 after:bg-teal-600 after:left-6"></span>

               <h1 className='uppercase text-xl mb-4    ml-16'>High School Diploma</h1>
               <p className='mt-10 ml-12  '>Foreign Languages | Bouira</p>


               </div> 
               <div className='w-2/3 mt-12  sm:w-full   ml-28 '>
               <span className="bg-teal-600 rounded-full p-2  uppercase absolute ml-16">project</span>
              <FaGraduationCap size={50} className='bg-teal-600 rounded-full p-2'/>
              <span className="after:w-1 after:h-[200px] relative after:absolute after:-mt-2 after:bg-teal-600 after:left-6"></span>

               <h1 className='uppercase text-xl mb-4    ml-16'>React | Laravel</h1>
               <p className='mt-10 ml-12  '>
               I got to know React and Laravel through many videos on YouTube and their website, which allowed me to build small apps. However, I'm always ready to learn something new to develop apps because we use them every day, and I am fascinated by the interaction between the app and the user.</p>


               </div> 
              
                

                  </div>
             
               
             
                </div>

              </div>
              {/** END OF STUDY AND EXPERIENCE */}

                                                         {/** END OF PERSONAL STORY */}

                                                         {/** SKILLS */}
              <div className='mt-12 '>


                <h1 className="uppercase text-2xl m-12 font-semibold flex justify-center items-center">skills</h1>

                <div className='flex flex-row-2 space-x-2 sm:grid sm:grid-cols-1  md:grid md:grid-cols-3 sm:space-y-4 md:space-x-4   md:space-y-24 '>
                  {/** NEXTJS */}
                <div className='w-2/5 h-40 border-2 cursor-pointer  border-white shadow-md shadow-white hover:opacity-90 hover:scale-105  mt-24 ml-4  sm:w-full  md:w-2/3' >
                <Image
                src="/images/Nextjs.jpg"
                layout="responsive"
                width={700}
                height={10}
                alt="Next.js Image"
                className=''
                 />
                </div>
                                  {/** LARAVEL*/}

                <div className='w-2/5  h-40 border-2 cursor-pointer  border-white shadow-md shadow-white hover:opacity-60 hover:scale-105 sm:w-full md:w-2/3'>
                <Image
               src={'/images/laravel.png'}
               width={700}
               height={5}
               alt=''
               className=''
               layout="responsive"
               
                />
                </div>
                                  {/** REACTJS */}

                <div className='w-2/5 h-40 border-2 cursor-pointer  border-white shadow-md shadow-white hover:opacity-60 hover:scale-105 sm:w-full  md:w-2/3'>
                <Image
                src={'/images/react_js.jpg'}
                layout="responsive"
                width={700}
                height={10}
                alt="Next.js Image"
                className=' '
                 />
                </div>
                                  {/** JAVASCRIPT */}

                <div className='w-2/5 h-40 border-2 cursor-pointer  border-white shadow-md shadow-white hover:opacity-60 hover:scale-105 sm:w-full  md:w-2/3'>
                <Image
src={'/images/js .png'}
layout="responsive"
                width={700}
                height={40}
                alt="Next.js Image"
                className=''
/>
                </div>
                                  {/** TYPESCRIPT */}

                <div className='w-2/5 h-40 border-2 cursor-pointer  border-white shadow-md shadow-white  hover:opacity-60 hover:scale-105 sm:w-full  md:w-2/3'>
                <Image
src={'/images/typescript.jpeg'}
width={300}
height={80}
alt=''
className=''
layout="responsive"

/>
                </div>
                                  {/** TAILWIND */}

                <div className='w-2/5 h-40 border-2 cursor-pointer  border-white shadow-md shadow-white hover:opacity-60 hover:scale-105 sm:w-full  md:w-2/3'>
                <Image
                src={'/images/tailwind.jpg'}

                layout="responsive"
                width={700}
                height={10}
                alt="Next.js Image"
                className=''
/>
 
                </div>
               

                </div>
           
              </div>
                                                         {/** END OF SKILLS */}


                                                         {/** CONTACT */}
              <div className='contact mt-16 mb-16   '>
                <h1 className="uppercase flex justify-center font-semibold items-center ">contact me</h1>

                <div className='container sm:ml-16 flex justify-center font-semibold items-center mt-12   sm:grid sm:grid-cols-1  sm:w-full md:grid md:ml-28 md:grid-cols-2  lg:grid lg:grid-cols-3 lg:ml-16'>
            {/** */}
            <div className='hover:text-teal-400'>  
                      <a href="mailto:dorbaneaberrahmen@gmail.com" target='_blank' > <MdEmail size={50} className='w-3/5 h-full'/></a>
                    
                  </div>
                  <div className='Linkedin    cursor-pointer hover:opacity-80 hover:text-teal-400'>
                     <a href="https://www.linkedin.com/in/dorbane-abderrahmen-78133a279/" target='_blank'> <FaLinkedin size={50} className='w-3/5 h-48'/> </a>

                  </div>
                  <div className='github   cursor-pointer hover:opacity-80 hover:text-teal-400'>
                    <a href="https://github.com/Abderrahmendr " target='_blank'><FaGithub size={50}  className='w-3/5 h-48'/></a>
                  </div>

                </div>

              </div>
                                                         {/** END OF CONTACT */}
                                                         



      </div>
     </section>
  )
}

export default page