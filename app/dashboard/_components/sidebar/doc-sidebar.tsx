"use client";
import { dSideBar } from "@/constant";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
export const DocSidebar = () => {
  return (
    <div className="flex flex-col gap-16 items-start py-8">
      {dSideBar.map((p) => (
        <div key={p.title} className="flex items-center gap-2">
          <Link href={p.url} className="flex items-center gap-4">
            {p.icon}
            <span className="hidden md:block font-inter font-medium">
              {p.title}
            </span>
          </Link>
        </div>
      ))}
      <Button
        onClick={() => signOut()}
        className="w-full"
        variant={"destructive"}
      >
        Log Out
      </Button>
    </div>
  );
};
