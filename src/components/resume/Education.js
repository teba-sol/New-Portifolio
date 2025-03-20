import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Software Engineering"
            subTitle="Wolkite University  (2013 - 2018 E.C)"
            result="3.75/4"
            des={
              <>
                Magor Gpa:
                <ul>
                  <li>Web development</li>
                  <li>Data structure and Algorithm</li>
                  <li>Operating system</li>
                  <li>Fundamental of Database</li>
                </ul>
              </>
            }
          />
          
          <ResumeCard
            title="Secondary School Education"
            subTitle="Misgana Secondary School (2009 - 2012 E.C)"
            result="85%"
            // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2017</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Intern at INSA (Information Network Security Agency)"
            subTitle="Own"
            des="Designed and developed user interfaces for web applications using React, Micro-front-end Architecture and Material UI. Worked closely with backend developers to integrate frontend components with Spring Boot APIs. Implemented responsive designs and optimized frontend performance."
          />
          <ResumeCard
            title="Full Stack Development"
            subTitle="Collaborating with teams"
            des="Developed and maintained web applications using  React.js, and Node.js and tailwind Css. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule."
          />
          <ResumeCard
            title="App Development"
            subTitle="Collaborating with teams"
            des="Developed a mobile application to provide community services to users, using Java for Android development and Firebase for backend services. Implemented user authentication, service requests, notifications, and service history functionalities. Integrated Firebase for real-time database management, handling user data, service requests, and notifications efficiently. Focused on creating a seamless user experience with smooth navigation and responsive UI design."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;