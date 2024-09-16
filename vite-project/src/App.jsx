import { useRef, useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("light");
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    service: useRef(null),
    portfolio: useRef(null),
    resume: useRef(null),
    blog: useRef(null),
    contact: useRef(null),
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider defaultTheme={theme} storageKey="vite-ui-theme">
      <div className={`min-h-screen ${theme === 'dark' ? 'dark' : 'light'} text-black font-kanit`}>
        <Navbar sectionRefs={sectionRefs} toggleTheme={toggleTheme} theme={theme}/>
      
        
        <main className=" text-black dark:text-gray-100 transition-colors duration-300">
          <section
            ref={sectionRefs.home}
            className="min-h-screen pt-16 bg-gray-300 dark:bg-gray-900"
          >
            <Home sectionRefs={sectionRefs}/>
          </section>

          <section
            ref={sectionRefs.about}
            className="min-h-screen pt-16 bg-gray-100 dark:bg-gray-800"
          >
            <About />
          </section>

          <section
            ref={sectionRefs.service}
            className="min-h-screen pt-16 bg-gray-300 dark:bg-gray-900"
          >
            <Service />
          </section>

          <section
            ref={sectionRefs.portfolio}
            className="min-h-screen pt-16 bg-gray-100 dark:bg-gray-800"
          >
            <Portfolio />
          </section>

          <section
            ref={sectionRefs.resume}
            className="min-h-screen pt-16 bg-gray-300 dark:bg-gray-900"
          >
            <Resume />
          </section>

          <section
            ref={sectionRefs.blog}
            className="min-h-screen pt-16 bg-gray-100 dark:bg-gray-800"
          >
            <Blog />
          </section>

          <section
            ref={sectionRefs.contact}
            className="min-h-screen pt-16 bg-gray-300 dark:bg-gray-900"
          >
            <Contact />
          </section>
          </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
