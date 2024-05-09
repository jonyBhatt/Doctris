import { About } from "@/components/shared/About/about";
import { Header } from "@/components/shared/Header/header";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <About />
      {/* <p>Footer</p> */}
    </main>
  );
}
