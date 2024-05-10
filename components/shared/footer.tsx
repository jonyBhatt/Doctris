import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
const company = [
  {
    name: "About us",
    icon: <ArrowRightIcon className="w-4 h-4" />, // Font Awesome class for info icon
  },
  {
    name: "Services",
    icon: <ArrowRightIcon className="w-4 h-4" />,
  },
  {
    name: "Team",
    icon: <ArrowRightIcon className="w-4 h-4" />,
  },
  {
    name: "Project",
    icon: <ArrowRightIcon className="w-4 h-4" />,
  },
  {
    name: "Blog",
    icon: <ArrowRightIcon className="w-4 h-4" />,
  },
  {
    name: "Login",
    icon: <ArrowRightIcon className="w-4 h-4" />, // Font Awesome class for right arrow icon
  },
];
export const Footer = () => {
  return (
    <footer className=" p-8 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:gap-16  gap-1">
          {/**Logo Title */}
          <div className="flex gap-3 flex-col items-start max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/logo.png" alt="logo" width={30} height={30} />
              <span className="font-ubuntu text-2xl font-bold">CareSync</span>
            </Link>
            <span className="text-gray-400 font-inter text-sm break-words">
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment or a simple
              consultation.
            </span>
          </div>
          {/** Other Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/** Company */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold font-inter">Company</h2>
              <div className="flex items-start flex-col justify-center gap-3">
                {company.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center justify-center gap-2"
                  >
                    {c.icon}
                    <span className="font-inter">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/** Departments */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold font-inter">Departments</h2>
              <div className="flex items-start flex-col justify-center gap-3">
                {company.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center justify-center gap-2"
                  >
                    {c.icon}
                    <span className="font-inter">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/** Contact Us */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold font-inter">Contact Us</h2>
              <div className="flex items-start flex-col justify-center gap-3">
                {company.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center justify-center gap-2"
                  >
                    {c.icon}
                    <span className="font-inter">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
