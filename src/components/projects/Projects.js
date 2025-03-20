import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, movie, m2, bo, co, fin, job,portifoli } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Movie Booking"
          des="Movie Site A platform for renting movies, reserving seats, adding upcoming movies, and watching thrillers. Built with HTML, CSS, JavaScript, PHP, and MySQL."
          src={m2}
          githubLink="https://github.com/teba-sol/Movie-Booking"
        />
        <ProjectsCard
          title="First Portfolio"
          des="My first personal portfolio, designed to showcase who I am, the journey I have been through, and the projects I have accomplished. It reflects my skills, experiences, and passions, offering insights into my professional growth and personal achievements."
          src={portifoli}
          githubLink="https://github.com/teba-sol/personal-portfolio"
        />
        <ProjectsCard
          title="Chatting App"
          des="An Android application developed using Java, designed to enable users to create groups, join available groups, and engage in real-time messaging. The app leverages Firebase as the backend for data storage, authentication, and real-time updates."
          src={co}
          githubLink="https://github.com/teba-sol/chat-app"
        />
        <ProjectsCard
          title="Book Catalogue"
          des="A MERN Stack (MongoDB, Express.js, React, Node.js) web application designed to perform full CRUD (Create, Read, Update, Delete) operations. It is fully interactive and responsive, ensuring seamless user engagement across various devices."
          src={bo}
          githubLink="https://github.com/teba-sol/Book-Catalog"
        />
        <ProjectsCard
          title="Finance Management"
          des="BM-Finance is a finance management web application designed to help users track their financial transactions, view their current balance, and analyze weekly expenses through an intuitive dashboard. The app provides user authentication, a protected dashboard, and seamless transaction management with MongoDB as the backend database."
          src={fin}
          githubLink="https://github.com/teba-sol/Bm_Finance"
        />
        <ProjectsCard
          title="Job Portal Website"
          des="A dynamic job application platform built using Micro Frontends with React Module Federation for scalable, modular development. Leveraging Material UI for a sleek, responsive interface, the portal ensures a seamless user experience—from job browsing to application submission."
          src={job}
          githubLink="https://github.com/teba-sol/jobPortal"
        />
      </div>
    </section>
  );
};

export default Projects;