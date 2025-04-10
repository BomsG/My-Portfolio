"use client"
import Skills from '@/component/ui/Skills';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Pro1 from '@/public/pro1.jpeg'
import Pro2 from '@/public/pro2.jpeg'
import Pro3 from '@/public/me2.jpeg'
import Pro4 from '@/public/me3.jpeg'
import Nav from '@/component/Nav';

const Home = () => {
    const projects = [
        {
          title: "SolarAfrique",
          image: Pro1,
          description: " An ecommerce website where customers can buy solar equipment and also connect to an installer by matching with installers close to them"
        },
        {
          title: "D_Pyramid",
          image: Pro2,
          description: "A simple business identity website"
        },
        // {
        //   title: "Project 3",
        //   image: Pro3,
        //   description: "helllllllllllllllo"
        // },
        // {
        //   title: "Project 4",
        //   image: Pro4,
        //   description: "helllllllllllllllo"
        // },
      ];
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden"> 
    <Nav />
      <section className="max-w-4xl mx-auto px-6 py-24 z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fadeIn">
          Hi, I’m <span className="text-purple-500">Boma George</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 opacity-0 animate-fadeIn delay-200">
        A passionate Frontend Developer with a focus on creating intuitive, dynamic, and user-friendly web and mobile experiences. With hands-on experience in modern frameworks like React, React Native, and Tailwind CSS, I specialize in transforming design concepts into fully functional, visually appealing websites and apps.
        </p>

        <div className="flex gap-4 mb-12 opacity-0 animate-fadeIn delay-400">
          <a href="mailto:your@email.com" className="inline-flex items-center px-4 py-2 border border-purple-500 text-white rounded-lg">
            <Mail size={16} /> Contact Me
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-purple-500">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-purple-500">
            <Linkedin size={28} />
          </a>
        </div>
        <Skills />
        <h1 className='text-4xl font-bold text-center mt-20 mb-10'>Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <div
          key={i}
          className=" bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative w-full h-48">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-white">
              {project.title}
            </h2>
            <p className="text-gray-400 text-sm">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
       
      </section>
    </main>
  );
};

export default Home;
