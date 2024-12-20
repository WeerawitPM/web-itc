// import Image from "next/image";
import axios from "axios";
import HeroSection from "./hero-section";
import TeamSection from "./team-section";
import Services from "./services-section";
import Company from "./companies-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "this is the home page",
};

const fetchData = async () => {
  try {
    const section = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/section-home?populate=*`);
    const companies = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/companies?populate=*`);
    const services = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/services?pagination[pageSize]=1000&populate=*`);
    const teams = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/teams?populate=*`);
    return [section.data.data, companies.data.data, services.data.data, teams.data.data];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Home() {
  const data = await fetchData();
  // console.log(data);
  const title = data[0]?.attributes?.title || "Not available";
  const description = data[0]?.attributes?.description || "Not available";
  // const link = data?.attributes?.link || "Not available";
  const imageUrl = data[0]?.attributes?.image?.data?.attributes?.url ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_IMAGE}${data[0]?.attributes?.image?.data?.attributes?.url}` : "/assets/images/not-found.png";

  return (
    <>
      <HeroSection title={title} description={description} imageUrl={imageUrl} />
      <Company data={data[1]} />
      <Services data={data[2]} />
      <TeamSection data={data[3]} />
      <hr className="max-w-7xl mx-auto dark:border-none" />
    </>
  );
}
