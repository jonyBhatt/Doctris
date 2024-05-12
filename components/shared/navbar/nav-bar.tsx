"use client";
import { TextAlignRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useCurrentUserSession } from "@/hooks/use-current-user";
export const Navbar = () => {
  const user = useCurrentUserSession();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SignOut = () => {
    signOut();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? "bg-muted" : "bg-transparent text-[#EEE0FF]"
      } `}
    >
      <div className="container mx-auto px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/logo.png" alt="logo" width={30} height={30} />
            <span className="font-ubuntu text-2xl font-bold">CareSync</span>
          </Link>
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <a href="#" className="text-sm font-inter font-medium ">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-inter font-medium ">
                DOCTORS
              </a>
            </li>
            <li>
              <a href="#" className=" text-sm font-inter font-medium">
                PATIENTS
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-inter font-medium">
                PHARMACY
              </a>
            </li>
          </ul>
        </div>
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={user.image as string} alt={user.firstname} />
                <AvatarFallback
                  className={`${
                    isScrolled
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted bg-muted-foreground"
                  }`}
                >
                  {user.firstname.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/profile"}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/dashboard"}>Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button variant="destructive" size="lg" onClick={SignOut}>
                  Sign Out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/** Mobile */}
        <div className="lg:hidden md:flex">
          <Sheet>
            <SheetTrigger>
              <TextAlignRightIcon
                className="text-primary "
                width={"30"}
                height={"30"}
              />
            </SheetTrigger>
            <SheetContent side={"left"} className="p-0">
              <SheetHeader className="bg-secondary h-[150px] px-4 pt-24 ">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/logo.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <h2 className="font-ubuntu font-bold text-4xl">CareSync</h2>
                </div>
              </SheetHeader>
              <div className="flex flex-col gap-6 items-start w-full mt-10 px-8">
                <Link href={"#"} className="font-ubuntu text-3xl">
                  Home
                </Link>
                <Link href={"#"} className="font-ubuntu text-3xl">
                  Doctors
                </Link>
                <Link href={"#"} className="font-ubuntu text-3xl">
                  Patients
                </Link>
                <Link href={"#"} className="font-ubuntu text-3xl">
                  About
                </Link>
                <div className="mt-8 w-1/2 flex flex-col gap-4">
                  <Link href={"/sign-in"}>
                    <Button size={"lg"} className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button
                      size={"lg"}
                      variant={"secondary"}
                      className="w-full"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

{
  /**
   *
   * <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
   */
}
