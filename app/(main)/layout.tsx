import { auth } from "@/auth";
import { Navbar } from "@/components/shared/navbar/nav-bar";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

async function MainLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Navbar />
      <main className="">{children}</main>
    </section>
  );
}
export default MainLayout;
