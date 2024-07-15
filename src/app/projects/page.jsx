import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../navbar/navbar'

function page() {
  return (
    <section className='   flex items-center justify-center  '>
      
    <div className='container text-white  mb-12 sm:grid-cols-1 '>

<div className='flex items-center justify-center m-8 '>
<h1 className='uppercase opacity-40 absolute text-5xl font-extrabold mb-4 ml-44    text-nowrap sm:mr-28 sm:text-4xl'>mein Projekte </h1>
          <h2 className='uppercase mt-8 text-6xl      flex justify-center items-center  sm:m-4 sm:w-full text-teal-400 font-extrabold text-nowrap  sm:mt-10  sm:ml-20 sm:text-5xl '>my projects </h2>


        <span className=' -ml-48 after:top-56 relative after:w-1 after:h-[95rem] after:bg-teal-500 after:absolute sm:hidden'></span>
       
</div>
<div className=" flex items-center justify-center lg:ml-36  ">
<Navbar />

</div>

                                                  {/** PROJECTS */}
     <div className='relative  sm:grid-cols-1 sm:grid '>
      
                                            {/** FIRST PROJECT */}
     <div className='ml-28 cursor-pointer sm:flex flex-row  sm:grid-cols-1 sm:grid sm:-ml-4 sm:h-60 sm:mb-32'>
<div className=' w-2/5 h-50 shadow-md shadow-white border-white border-2 ml-8 mt-56 hover:scale-110 sm:w-full sm:-ml-4 sm:h-50 '>
<a href="https://ufp-de.vercel.app/" target='_blank'>
<Image
src={'/images/UFP-DE.PNG'}
width={700}
height={100}
alt=''
className=' '
/>
</a>
</div>                                                
<span className='   relative after:mt-16 after:ml-6 after:lg:w-[600px] after:h-1 after:bg-teal-500 after:absolute after:sm:w-[200px] sm:ml-4 after:md:w-[200px] md:ml-8'></span>
     </div>
                                          {/** END OF FIRST PROJECT */}

                                           {/** SECOND PROJECT */}
      <div className=' -mt-16 cursor-pointer flex flex-row-reverse  lg:mr-12 sm:mt-4 sm:grid-cols-1 sm:grid sm:-ml-4 sm:h-60'>
        
      <div className=' w-1/3 h-50 shadow-md shadow-white border-white border-2 ml-8 mt-56 hover:scale-110 sm:w-full sm:-ml-4 sm:h-50 md:-mr-10 md:mt-42 '>

      <a href="https://weather-news-seven.vercel.app/" target="_blank">
<Image
src={'/images/weather-news.PNG' }
width={700}
height={100}
alt=''
/>
</a>
      </div>                                                

     </div>
     <span className=' flex flex-row-reverse relative after:mt-16  after:lg:w-[550px] after:h-1 after:bg-teal-500 after:absolute after:-mr-2 after:sm:w-[200px] sm:mt-56 sm:mr-20 after:md:w-[200px]   md:-mt-6' ></span>

                                           {/** END OF SECOND PROJECT */}
                                            
                                             {/** third PROJECT */}

 <div className='ml-28 cursor-pointer sm:flex flex-row  sm:grid-cols-1 sm:grid sm:-ml-4 sm:h-60 sm:mb-32'>
<div className=' w-2/5 h-50 shadow-md shadow-white border-white border-2 ml-8 mt-56 hover:scale-110 sm:w-full sm:-ml-4 sm:h-50 '>
<a href='https://book-hub-navy.vercel.app/'  target='_blank'>
<Image
src={'/images/Book-hub.png'}
width={700}
height={100}
alt=''
/>
</a>
</div>                                                
<span className='   relative after:mt-16 after:ml-6 after:lg:w-[600px] after:h-1 after:bg-teal-500 after:absolute after:sm:w-[200px] sm:ml-4 after:md:w-[200px] md:ml-8'></span>
     </div>

                                             {/** END OF third PROJECT */}




</div>
                                                  {/** END OF PROJECTS */}

</div>

    </section>
  )
}

export default page