import axios from "axios";
import Content from "./content";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Software",
    description: "this is a list of all the software",
};

const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/websites?pagination[pageSize]=1000&populate=*`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

const fetchCompanyData = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/companies?populate=*`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export default async function Home() {
    const data = await fetchData();
    const companies = await fetchCompanyData();
    return (
        <section className="relative pt-32 pb-5 dark:bg-gray-950 flex flex-col">
            <Content data={data} companies={companies} />
        </section>
    )
}
