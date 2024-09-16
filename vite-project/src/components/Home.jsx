import Proptypes from "prop-types";
import { scrollToSection } from "../utils/scrollUtils";

const Home = ( {sectionRefs} ) => {



  return (
    <div className="home-container flex flex-col h-screen md:flex-row justify-between">
      <div className="flex basis-1/2 items-center justify-center">
        <figure className="flex items-center justify-center mx-4 my-4 py-10 hover:border-4 hover:border-sky-300 hover:rounded-xl transition-all duration-50">
          <img
            src="../src/assets/img/cat-2068462_1280.jpg"
            className="w-3/4 rounded-lg"
            alt="cat"
          />
        </figure>
      </div>
      <div className="flex justify-center items-center basis-1/2">
        <div className="m-4">
          <p className="text-blue-800 text-lg">Hello. Wellcome everyone</p>
          <p className="text-4xl font-bold">I am Thaweesin Sangorasit.</p>
          <p>
            Iam electronics engineer. I am change my way to Wed
            devolopment. At fisrt I study Fornt-end and next step i will devolop
            myself to Back-end. I thing in 3 to 4 years later i hops i can go to
            Full-stack wed devolopment.
          </p>
          <button className="bg-blue-900 text-white rounded-xl font-medium py-2 px-4 mt-4" onClick={() => scrollToSection(sectionRefs.contact)} >Contact me</button>
        </div>
      </div>
    </div>
  );
};


Home.propTypes = {
    sectionRefs : Proptypes.object,
}
export default Home;
