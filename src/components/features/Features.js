import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Website Developmnet"
          des="Bringing ideas to life through clean code, intuitive designs, and seamless user experiences. From front-end interfaces to back-end logic, I focus on creating responsive, user-friendly websites that not only look great but perform flawlessly.
           Every line of code is written with purpose—to build fast, accessible, and future-ready web solutions"
         
        />
        <Card
          title="App Development"
          des="Transforming concepts into dynamic, user-centric applications. I craft seamless, high-performance apps that prioritize functionality, aesthetics, and user experience. From intuitive interfaces to robust back-end systems,
           every feature is designed to deliver value, scalability, and engagement across all devices."
          icon={<AiFillAppstore />}
        />
      
        <Card
          title="UX Design"
          des="Designing with purpose, empathy, and the user in mind. I focus on creating intuitive, engaging, and accessible experiences that seamlessly guide users through every interaction. By blending aesthetics with functionality,
           I turn complex ideas into simple, user-friendly designs that leave a lasting impression."
          icon={<SiAntdesign />}
        />
       
      </div>
    </section>
  );
}

export default Features