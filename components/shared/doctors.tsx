import { Button } from "../ui/button";
import { HoverEffect } from "../ui/card-hover-effect";

const doctors = [
  {
    title: "Calvin Carlo",
    description: "Eye Care.",
    image: "/assets/doc1.jpg",
    link: "#",
  },
  {
    title: "Cristino Murphy",
    description: "M.B.B.S, Gynecologist",
    image: "/assets/doc2.jpg",
    link: "#",
  },
  {
    title: "Alia Reddy",
    description: "M.B.B.S, Psychotherapist",
    image: "/assets/doc3.jpg",
    link: "#",
  },
  {
    title: "Toni Kovar",
    description: "M.B.B.S, Orthopedic",
    image: "/assets/doc4.jpg",
    link: "#",
  },
];
export const Doctors = () => {
  return (
    <section className="container mx-auto py-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-semibold font-inter text-lg tracking-wide">
          Doctors
        </h2>
        <span className="text-base text-muted-foreground font-inter font-normal text-center">
          Great doctor if you need your family member to get effective immediate
          assistance, <br /> emergency treatment or a simple consultation.
        </span>
      </div>
      <div className="py-8 max-w-5xl mx-auto">
        <HoverEffect items={doctors} />
      </div>
      <div className="flex justify-center items-center">
        <Button size={"lg"}>View All</Button>
      </div>
    </section>
  );
};
