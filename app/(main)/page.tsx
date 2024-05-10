import { About } from "@/components/shared/About/about";
import { Department } from "@/components/shared/department";
import { Doctors } from "@/components/shared/doctors";
import { Footer } from "@/components/shared/footer";

import { Header } from "@/components/shared/Header/header";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <About />
      <Department />
      <Doctors />
      <Footer />
      {/* <p>Footer</p> */}
    </main>
  );
}
