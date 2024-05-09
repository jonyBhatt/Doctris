import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <section className="header">
      <div className="bg-overlay">
        <div className="flex flex-col md:items-start items-center w-full  gap-8 container mx-auto px-10 pt-[200px] md:p-[170px] ">
          <Link href="/" className="">
            <Image src="/assets/logo.png" alt="logo" width={60} height={80} />
          </Link>
          <h2 className="font-bold font-inter tracking-wide text-primary-foreground text-center md:text-left leading-normal text-6xl break-words">
            Meet The <br /> Best Doctor
          </h2>
          <span className="text-gray-300 text-base text-center md:text-left break-words">
            Great doctor if you need your family member to get effective
            immediate <br /> assistance, emergency treatment or a simple
            consultation.
          </span>
          <div className="flex flex-col items-center w-full md:items-start md:w-auto gap-2">
            <Button size="lg">Make Appointment</Button>
            <span className="text-gray-300 text-base break-words">
              T&C apply. Please read Terms and Conditions
            </span>
          </div>
        </div>
        <div className=" px-4 py-6 mt-28 w-full md:max-w-4xl mx-auto md:-mt-24 rounded">
          <div className="flex justify-between flex-col gap-5 md:gap-0 md:flex-row items-center">
            <div className="flex flex-col gap-4 bg-[#F8F9FA] p-4">
              <Image src="/assets/logo.png" alt="logo" width={30} height={30} />
              <h2 className="font-medium font-inter text-lg">
                Emergency Cases
              </h2>
              <span className="text-sm font-inter text-muted-foreground break-words">
                This is required when, for example, the is not yet available.
                Dummy text is also known as &lsquo;fill text&lsquo;.
              </span>
              <Link href={"#"} className="flex items-center text-primary gap-1">
                Read More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-col gap-4 bg-[#FFFFFF] p-4">
              <Image
                src="/assets/timeline.svg"
                alt="logo"
                width={30}
                height={30}
              />
              <h2 className="font-medium font-inter text-lg">
                Doctors Timetable
              </h2>
              <span className="text-sm font-inter text-muted-foreground break-words">
                This is required when, for example, the is not yet available.
                Dummy text is also known as &lsquo;fill text&lsquo;.
              </span>
              <Link href={"#"} className="flex items-center text-primary gap-1">
                Read More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-col gap-4 bg-[#F8F9FA] p-4">
              <Image
                src="/assets/opening.svg"
                alt="logo"
                width={30}
                height={30}
              />
              <h2 className="font-medium font-inter text-lg">Opening Hours</h2>
              <span className="text-sm font-inter text-muted-foreground break-words">
                This is required when, for example, the is not yet available.
                Dummy text is also known as &lsquo;fill text&lsquo;.
              </span>
              <Link href={"#"} className="flex items-center text-primary gap-1">
                Read More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /**
   * 
   * <div className="container mx-auto pt-[200px] flex flex-col items-start gap-8 -mr-20">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.png" alt="logo" width={80} height={80} />
        </Link>
      </div>
   */
}
