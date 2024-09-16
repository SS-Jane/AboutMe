import { faCode, faWandMagicSparkles, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = () => {
  const services = [
    {
      icon: <FontAwesomeIcon icon={faCode} className="h-[4rem] w-[4rem]"/>,
      title: "Wed Development",
      description:
        "Creating responsive and dynamic websites using modern technologies.",
    },
    {
      icon: <FontAwesomeIcon icon={faWandMagicSparkles} className="h-[4rem] w-[4rem]"/>,
      title: "UI/UX Design", 
      description:
        "Designing intuitive and visually appealing user interfaces.",
    },
    { 
      icon: <FontAwesomeIcon icon={faMobileScreen} className="h-[4rem] w-[4rem]"/>,
      title: "Mobile App Development", 
      description:
        "Building cross-platform mobile applications using React Native.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-auto items-center justify-center">
        <span className="text-3xl font-bold  text-blue-700">My</span>&nbsp;
        <span className="text-3xl font-bold">Services</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16 px-6 auto-cols-max">
        {services.map((service, index) => (
          <div key={index} className="card bg-gray-100 shadow-xl min-h-80">
            <div className="card-body">
              <p className="flex items-center justify-center pb-2">
                {service.icon}
              </p>
              <h2 className="card-title text-2xl">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
