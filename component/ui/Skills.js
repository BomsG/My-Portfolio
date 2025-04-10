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
             <div>
                <h2 className='text-4xl font-bold mt-20 mb-10 text-center'>Here is a little about me</h2>
                <p>My journey into tech wasn&apos;t the easiest, but it&apos;s been one filled with growth, resilience, and a whole lot of curiosity. When I first started, everything felt overwhelming—lines of code that made no sense, errors that kept me up at night, and tutorials that sometimes felt like riddles. There were moments I questioned if I was cut out for this, but deep down, I knew I had a spark for problem-solving and creativity. That spark kept me going. Through consistency, community, and countless hours of learning, I began to see the progress. Slowly but surely, things started to click. From building my first simple webpage to now creating full-fledged apps with React, React Native, and even dabbling in backend with Node.js—I&apos;ve come a long way, and I&apos;m just getting started.

I&apos;m naturally optimistic and love to share what I learn. I believe that growth comes from giving back, asking questions, and never being afraid to try—even if it means failing first. Every bug I fix and every project I ship reminds me why I chose this path.

I&apos;m not scared of the challenges ahead—I&apos;m excited by them. I&apos;m always eager to learn, collaborate, and build things that make life just a little bit better for people. So, whether it&apos;s a sleek new interface or a helpful little feature, I pour my heart into everything I create.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <Image src={Me} alt='me' className='rounded-lg w-[500px] h-[500px]'/>
              <Image src={Me2} alt='me' className='rounded-lg w-[500px] h-[500px]'/>
            </div>
        </main>
      );
    }


export default Skills