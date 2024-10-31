import React from "react";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpo, SiTailwindcss, SiReact } from "react-icons/si";

const Skills = () => {
  const style = "border-b border-neutral-700/80 mx-auto w-full max-w-xs h-[2px]";
  const textStyle = "text-neutral-500";
  const textTechStyle = "flex items-center space-x-4";
  const colorAndSize = {
    size: 35,
    color: "#9d5900",
  };

  return (
    <div>
      <h2 className="text-center lg:text-4xl text-4xl mb-4 mt-5" id="skills">
        Skills
      </h2>
      <div className="w-full flex flex-col lg:flex-row bg-neutral-900 rounded-2xl p-4 justify-center">
        <img
          className="w-full lg:w-1/2 h-180 lg:h-[700px] rounded-lg py-5"
          src="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=772&format=webpll"
          alt="this is a code image"
        />

        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 flex flex-col justify-center">
          <h3 className="text-center lg:text-left font-semibold text-xl text-white">
            Some Languages & Technologies Used
          </h3>
          <div className="space-y-4 mt-8">
            <div className={textTechStyle}>
              <FaCss3Alt
                title="CSS3"
                color={colorAndSize.color}
                size={colorAndSize.size}
              />
              <div>
                <h4 className="text-lg font-semibold text-white">CSS3</h4>
                <p className={textStyle}>
                  3 years of experience in responsive design.
                </p>
              </div>
            </div>
            <div className={style}></div>

            <div className={textTechStyle}>
              <FaReact
                title="React.js"
                color={colorAndSize.color}
                size={colorAndSize.size}
              />
              <div>
                <h4 className="text-lg font-semibold text-white">React.js</h4>
                <p className={textStyle}>
                  3 years of experience in web development.
                </p>
              </div>
            </div>
            <div className={style}></div>

            <div className={textTechStyle}>
              <FaNodeJs
                title="Node.js"
                color={colorAndSize.color}
                size={colorAndSize.size}
              />
              <div>
                <h4 className="text-lg font-semibold text-white">Node.js</h4>
                <p className={textStyle}>
                  2 years of experience in backend development.
                </p>
              </div>
            </div>
            <div className={style}></div>

            <div className={textTechStyle}>
              <SiExpo
                title="Expo"
                color={colorAndSize.color}
                size={colorAndSize.size}
              />
              <div>
                <h4 className="text-lg font-semibold text-white">Expo</h4>
                <p className={textStyle}>
                  2 years of experience in mobile prototyping.
                </p>
              </div>
            </div>
            <div className={style}></div>

            <div className={textTechStyle}>
              <SiTailwindcss
                title="Tailwind CSS"
                color={colorAndSize.color}
                size={colorAndSize.size}
              />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Tailwind CSS
                </h4>
                <p className={textStyle}>
                  6 months of experience in rapid design.
                </p>
              </div>
            </div>
            <div className={style}></div>

            <div className={textTechStyle}>
              <SiReact
                title="React Native"
                color={colorAndSize.color}
                size={colorAndSize.size}
              />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  React Native
                </h4>
                <p className={textStyle}>
                  2 years of experience in mobile development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
