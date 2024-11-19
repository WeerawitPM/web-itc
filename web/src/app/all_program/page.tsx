import axios from "axios";
import Component from "./component";

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
    const companyData = await fetchCompanyData();

    return (
        <Component data={data} companyData={companyData}  />
    )
}

export const revalidate = 10; // กำหนดเวลาการรีเฟรชข้อมูลเป็นทุก ๆ 10 วินาที
