import React from "react";
import image3 from "../assets/orange-image.png";

const AboutMe = () => {
  return (
    <div className="bg-neutral-900 text-white p-8 rounded-lg shadow-lg" id="about">
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <div className="flex flex-wrap justify-center">
        <div className="lg:w-1/2 w-full px-4 bg-gradient-to-r from-orange-500 to-red-400 rounded-full">
          <img
            src={image3}
            alt="TechSculptor Dev"
            className="bg-neutral-800 rounded-full mx-auto lg:w-64 h-full object-cover shadow-lg mb-6"
          />
        </div>
        <div className="lg:w-1/2 w-full px-4 mt-5">
          <p className="text-lg leading-relaxed font-serif">
            Hello! I am <span className="font-semibold">TechSculptor Dev</span>, a developer passionate about creating innovative and efficient solutions.
            I hold a Bachelor's degree in Computer Science, which has enabled me to strengthen my technical skills and gain a deep understanding of the fundamentals of development.
          </p>
          <p className="text-lg leading-relaxed mt-4 font-serif">
            In addition to my specialization in computer science, I also pursued a common core in mathematics and computer science, which provided me with a solid foundation in these two complementary fields.
          </p>
          <p className="text-lg leading-relaxed mt-4 font-serif">
            My goal is to sculpt digital experiences that not only meet users' needs but also exceed their expectations. Whether through elegant interfaces or high-performance applications, I strive to transform every project into a technological work of art.
          </p>
          <p className="text-lg leading-relaxed mt-4 font-serif">
            As a professional, I believe in the importance of collaboration and communication to successfully complete every project. I am always seeking new challenges and opportunities to innovate and perfect my craft.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
