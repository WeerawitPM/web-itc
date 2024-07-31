import Image from "next/image";
import Hero from "./hero-section";
import Company from "./company-section";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Company />
    </main>
  );
}
