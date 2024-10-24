import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import Mail from '@mui/icons-material/Mail';
import WhatsApp from '@mui/icons-material/WhatsApp';
const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky z-50 top-0 py-2 backdrop-blur-lg border-b lg:mx-4 border-neutral-700/80">
      <div className="relative flex justify-between px-4 mx-3 items-center lg:text-sm flex-shrink-0">
        <div className="flex space-x-3 items-center text-xl">
          <img
            src={
              "data:image/jpeg;base64,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"
            }
            alt="Developer Logo"
            className="h-12 w-12"
          />
          <span className="font-semibold">VISIONARY.</span>
          <div class="flex flex-col space-y-4">
  <span class="flex items-center space-x-2">
    <WhatsApp className="w-6 h-6 text-green-500" />
    <span class="text-sm lg:text-base">+225 0789585242</span>
  </span>
</div>

        </div>

        <ul className="hidden lg:flex ml-14 space-x-12">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-orange-500 transition duration-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex space-x-12 items-center">
          <a href="#contact" className="border rounded-md py-2 px-2 text-md">
            Contact
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
          >
            Hire Me
          </a>
        </div>

        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 top-14 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} className="hover:text-orange-500 transition duration-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#contact" className="py-2 px-3 border rounded-md">
                Contact
              </a>
              <a
                href="#services"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
