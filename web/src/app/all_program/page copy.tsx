import Header from "@/components/header";
import axios from "axios";
import Detail from "./detail";
import CardComponent from "@/components/company/card";

const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/websites?pagination[pageSize]=1000&populate=*`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export default async function Home() {
    const data = await fetchData();
    // console.log(data);

    return (
        <>
            <Header title={"All"} />
            <section id="services" className="mx-auto p-4 max-w-[1280px]">
                <div className="flex flex-row flex-wrap justify-center gap-10">
                    {data.map((
                        website: {
                            id: string;
                            attributes: {
                                title: string;
                                url: string;
                                tutorial: string;
                                image?: { data?: { attributes?: { url?: string } } };
                                website_detail?: {
                                    data?: {
                                        id: string;
                                        attributes?: {
                                            title?: string;
                                            content?: string;
                                        }
                                    }
                                }
                            }
                        }) => (
                        <CardComponent
                            key={website.id}
                            href={website.attributes.url || "No content available"}
                            tutorial={website.attributes.tutorial || "No content available"}
                            src={website.attributes.image?.data?.attributes?.url ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_IMAGE}${website.attributes.image.data.attributes.url}` : "/assets/images/not-found.png"}
                            title={website.attributes.title || "No content available"}
                            content={website.attributes.website_detail?.data?.attributes?.content || "No content available"}
                            detail={Detail}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export const revalidate = 10; // กำหนดเวลาการรีเฟรชข้อมูลเป็นทุก ๆ 10 วินาที