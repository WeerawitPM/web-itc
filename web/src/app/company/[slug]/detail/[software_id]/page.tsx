import Breadcumb from "./breadcumb";
import Content from "./content";
import axios from "axios";

type Params = Promise<{ software_id: string }>

const fetchData = async (id: string) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/websites?filters[id][$eq]=${id}&populate=*`);
        const data = response.data.data;
        return data.length > 0 ? data[0] : null; // ดึงเฉพาะรายการแรก (หากมี)
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export default async function Home(props: { params: Params }) {
    const params = await props.params;
    const software_id = params.software_id;
    const data = await fetchData(software_id);
    // console.log(data.attributes.website_detail);
    const company = data.attributes.company.data.attributes.name;
    const title = data.attributes.title;
    const image = data.attributes.image?.data?.attributes?.url ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_IMAGE}${data.attributes.image.data.attributes.url}` : "/assets/images/not-found.png";
    const url = data.attributes.url || "No content available";
    const tutorial = data.attributes.tutorial || "No content available";

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={`Learn more about ${title} by ${company}`} />
            <section className="relative pt-24 pb-5 dark:bg-gray-950">
                <Breadcumb company={company} title={title} />
                <Content title={title} image={image} url={url} tutorial={tutorial} detail={data.attributes?.website_detail?.data?.attributes?.content || "No content available"} />
            </section>
        </>
    )
}
