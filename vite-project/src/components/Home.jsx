import Proptypes from "prop-types";
import { scrollToSection } from "../utils/scrollUtils";

const Home = ({ sectionRefs }) => {
  return (
    <div className="home-container flex flex-col h-screen md:flex-row justify-between mx-auto">
      <div className="flex basis-1/2 items-center justify-center">
        <figure className="flex items-center justify-center mx-4 my-4 py-10 hover:border-4 hover:border-blue-700 hover:rounded-xl transition-all duration-50">
          <img
            src="../src/assets/img/cat-2068462_1280.jpg"
            className="w-3/4 rounded-lg shadow-2xl "
            alt="cat"
          />
        </figure>
      </div>
      <div className="flex justify-center items-center basis-1/2">
        <div className="m-4 md:mt-1 md:text-lg">
          <p className="text-blue-800 text-lg my-1">
            Hello. Wellcome everyone to my portfolio
          </p>
          <p className="text-3xl font-bold my-1">I am Thaweesin Sangorasit.</p>
          <p className="my-2">
            A passionate Web Developer. With a strong background in ReactJS,
            TailwindCSS, I create innovative and user-friendly solutions that
            make a real impact. Explore my work, and let’s connect to bring your
            next big idea to life!
          </p>
          <button
            className="bg-blue-900 text-white rounded-xl text-base py-2 px-4 mt-4"
            onClick={() => scrollToSection(sectionRefs.contact)}
          >
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  sectionRefs: Proptypes.object,
};
export default Home;
