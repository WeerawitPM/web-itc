import Hero from "./hero-section";
import Company from "./company-section";
import SwiperText from "./swiper-text";
import Services from "./services-section";
import TeamSection from "./teams-section";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <SwiperText />
      <Company />
      <Services />
      <TeamSection />
    </main>
  );
}
