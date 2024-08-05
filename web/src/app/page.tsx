import Hero from "./hero-section";
import Company from "./company-section";
import SwiperText from "./swiper-text";
import Services from "./services-section";
import TeamSection from "./teams-section";
import axios from "axios";

const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/section-home?populate=*`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export default async function Home() {
  const data = await fetchData();

  return (
    <main className="main">
      <Hero data={data}/>
      <SwiperText />
      <Company />
      <Services />
      <TeamSection />
    </main>
  );
}
