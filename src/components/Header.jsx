import { init } from "ityped";
import { useEffect, useRef } from "react";
import "../css/header.css";
import { Link } from "react-scroll";
import { MdArrowDownward } from "react-icons/md";

const Header = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Applications", "Mobile Development", "Custom Solutions"],
    });
  }, []);

  return (
    <header className="text-center lg:pt-5 pt-1">
      <h1 className="text-center">
        <span className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
          Freelance Developer for{" "}
        </span>
        <span
          className="text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"
          ref={textRef}
        >
          {"  "}
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl mx-auto my-6">
        I specialize in crafting high-quality web and mobile applications
        tailored to meet your business needs. Whether you need a simple landing
        page or a complex enterprise solution, I bring your ideas to life with
        professional, scalable, and secure development services.
      </p>
      <div className="flex justify-center space-x-4">
        <div
          className="border px-6 py-3 bg-gradient-to-tr from-orange-500 to-orange-700 text-white rounded-md scroll-indicator"
        >
         <MdArrowDownward className="scroll-icon" />
        </div>
        {/* <button className="border px-6 py-3 rounded-md font-semibold">
          Buy Me Coffe
        </button> */}
      </div>
    </header>
  );
};

export default Header;
