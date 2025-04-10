import React from 'react'
import Image from 'next/image';
import Me from '@/public/me2.jpeg'
import Me2 from '@/public/me3.jpeg'

const Skills = () => {
    const skills = [
        "React",
        "Next.js",
        "HTML",
        "CSS",
        "Tailwind",
        "React Native",
        "WordPress",
      ];
    
      return (
        <main className=" items-center  px-4 mt-20">
            <div className="my-10 flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-purple-500 text-xl px-3 py-1 rounded-full shadow-sm hover:bg-blue-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
            {/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <Image src={Me} alt='me' className='rounded-lg w-[500px] h-[500px]'/>
              <Image src={Me2} alt='me' className='rounded-lg w-[500px] h-[500px]'/>
            </div> */}
            <h1 className='text-4xl font-bold text-center mt-20'>Projects</h1>
          <div className="flex justify-between shadow-xl rounded-2xl p-6 max-w-md w-full text-center">
           {/* <div>
            <h1 className="text-3xl font-bold text-white mb-2">My Skills</h1>
    
            <div className="my-10 flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 text-xl px-3 py-1 rounded-full shadow-sm hover:bg-blue-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
            </div> */}
          </div>
        </main>
      );
    }


export default Skills