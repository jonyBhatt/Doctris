import { Navbar } from "@/components/shared/navbar/nav-bar";
import { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Navbar />
      <main className="mt-20 container mx-auto">{children}</main>
    </section>
  );
}
export default MainLayout;
