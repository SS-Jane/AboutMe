import Proptypes from "prop-types";
import { scrollToSection } from "../utils/scrollUtils";

const About = ({ sectionRefs }) => {
  return (
    <div className="container mx-auto px-4 py-16 items-center justify-center">
      <div className="flex flex-auto items-center justify-center">
        <span className="text-3xl font-bold">About</span>&nbsp;
        <span className="text-3xl text-blue-700 font-bold">Me</span>
      </div>
      <div className="flex items-center justify-center py-16">
        <div className="card bg-white w-3/4 shadow-xl mx-auto">
          <div className="card-body">
            <p className="mb-4">
              I’m a former Project Leader with experience in AGV system
              installation. After successfully leading projects in the tech
              industry, I decided to pivot my career towards web development. My
              journey began with studying front-end technologies, and I’m now
              focusing on becoming a Junior Web Developer. I’m passionate about
              building responsive and user-friendly websites, and I’m excited to
              apply my problem-solving skills to this new field. Let’s connect
              if you’re looking for a dedicated and detail-oriented developer!
            </p>
            <div className="card-actions justify-end">
              <button
                className="bg-blue-900 text-white rounded-xl text-base py-2 px-4 mt-4"
                onClick={() => scrollToSection(sectionRefs.contact)}
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  sectionRefs: Proptypes.object,
};

export default About;
