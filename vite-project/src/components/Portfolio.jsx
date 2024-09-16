import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons/faWindowClose";

const Portfolio = () => {
  const portfolios = [
    {
      icon: <FontAwesomeIcon icon={faStore} className="h-[4rem] w-[4rem]" />,
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce platform built with React and Node.js.",
    },
    {
      icon: <FontAwesomeIcon icon={faWindowRestore} />,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing web development skills.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-auto items-center justify-center">
        <span className="text-3xl font-bold  text-blue-700">My</span>&nbsp;
        <span className="text-3xl font-bold">Portfolio</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16 px-6 auto-cols-max">
        {portfolios.map((project, index) => (
          <div key={index} className="card bg-gray-100 shadow-xl min-h-80">
            <div className="card-body">
              <p className="flex items-center justify-center pb-2">
                {project.icon}
              </p>
              <h2 className="card-title text-2xl">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
