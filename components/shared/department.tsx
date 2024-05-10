import Image from "next/image";

const servicesData = [
  {
    title: "Eye Care",
    description:
      "There is now an abundance of readable dummy texts required purely to fill a space.",
    icon: "/assets/eye.svg",
    link: "#",
  },
  {
    title: "Psychotherapy",
    description:
      "There is now an abundance of readable dummy texts required purely to fill a space.",
    icon: "/assets/head.svg",
    link: "#",
  },
  {
    title: "Primary Care",
    description:
      "There is now an abundance of readable dummy texts required purely to fill a space.",
    icon: "/assets/primary.svg",
    link: "#",
  },
  {
    title: "Dental Care",
    description:
      "There is now an abundance of readable dummy texts required purely to fill a space.",
    icon: "/assets/dental.svg",
    link: "#",
  },
  {
    title: "Orthopedic",
    description:
      "There is now an abundance of readable dummy texts required purely to fill a space.",
    icon: "/assets/ortho.svg",
    link: "#",
  },
  {
    title: "Cardiology",
    description:
      "There is now an abundance of readable dummy texts required purely to fill a space.",
    icon: "/assets/cardio.svg",
    link: "#",
  },
  {
    title: "Gynecology",
    description:
      "There is now an abundance of readable dummy texts required purely to fill a space.",
    icon: "/assets/gy.svg",
    link: "#",
  },
  {
    title: "Neurology",
    description:
      "There is now an abundance of readable dummy texts required purely to fill a space.",
    icon: "/assets/neuro.svg",
    link: "#",
  },
];
export const Department = () => {
  return (
    <div className="my-16 container mx-auto">
      <div className="flex flex-col items-center gap-4">
        <div className="py-1 px-4 rounded-full bg-muted">
          <span className="text-primary text-sm font-bold tracking-wider font-inter">
            Departments
          </span>
        </div>
        <h2 className="font-medium font-inter text-lg tracking-wide">
          Our Medical Services
        </h2>
        <span className="text-base text-muted-foreground font-inter font-normal text-center">
          Great doctor if you need your family member to get effective immediate
          assistance, <br /> emergency treatment or a simple consultation.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:grid-cols-4 w-full py-16">
        {servicesData.map((service) => (
          <div
            key={service.title}
            className=" w-full flex flex-col gap-2.5 items-start  p-4"
          >
            <div className="w-16 rounded-lg h-16 flex items-center justify-center bg-muted">
              <Image
                src={service.icon}
                alt="service icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <a href={service.link} className="text-blue-500 hover:underline">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
