// import React from "react";
import { scrollToSection } from "../utils/scrollUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";

const Navbar = ({ sectionRefs, toggleTheme, theme }) => {
  
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto  px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold dark:text-white">
              My Portfolio
            </div>
            <div className="hidden md:flex space-x-3">
              {Object.entries(sectionRefs).map(([key, ref]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(ref)}
                  className="dark:text-white px-2 py-1 hover:bg-slate-200 hover:border-1 hover:rounded-lg pointer-events-auto dark:hover:bg-gray-600 dark:hover:border-1 dark:hover:rounded-lg"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  
                </button>
              ))}
              <button onClick={toggleTheme} className="dark:text-white px-2 hover:bg-slate-200 hover:border-1 hover:rounded-lg pointer-events-auto dark:hover:bg-gray-600 dark:hover:border-1 dark:hover:rounded-lg">
                {theme === 'light' ? <FontAwesomeIcon icon={faMoon} className="h-[1rem] w-[1rem]"/> :
                <FontAwesomeIcon icon={faSun} className="h-[1rem] w-[1rem]"/>}
                <span className="sr-only">Toggle theme</span>
              </button>
            </div>
            <div className="md:hidden">
              <button className="dark:text-white">Menu</button>
            </div>
          </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  sectionRefs : PropTypes.object,
  toggleTheme : PropTypes.func,
  theme : PropTypes.string
}

export default Navbar;
