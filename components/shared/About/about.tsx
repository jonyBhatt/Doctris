import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const About = () => {
  return (
    <section className="pt-[250px] container mx-auto flex justify-center items-center gap-8 max-w-7xl">
      <Image
        src="/assets/about.png"
        alt="about"
        width={500}
        height={500}
        className="object-cover"
      />
      <div className="flex flex-col gap-4 items-start">
        <h2 className="font-bold font-inter text-3xl">About Our Treatments</h2>
        <span className="font-inter font-normal text-muted-foreground break-words">
          Great doctor if you need your family member to get effective immediate
          assistance, <br /> examination, emergency treatment or a simple
          consultation. Thank you.
        </span>
        <span className="font-inter font-normal text-muted-foreground break-words">
          The most well-known dummy text is the &apos;Lorem Ipsum&apos;, which
          is said to have originated in the 16th century. Lorem Ipsum is
          composed in a pseudo-Latin language which more or less corresponds to
          &apos;proper&apos; Latin. It contains a series of real Latin words.
        </span>
        <Button>
          Read More  <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
};
