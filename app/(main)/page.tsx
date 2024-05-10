import { About } from "@/components/shared/About/about";
import { Department } from "@/components/shared/department";
import { Header } from "@/components/shared/Header/header";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <About />
      <Department />
      {/* <p>Footer</p> */}
    </main>
  );
}
