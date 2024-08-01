import CardComponent from "@/components/company/card";
import Header from "@/components/header";
import Detail from "./detail";
import { Metadata } from "next";
import axios from "axios";

export const metadata: Metadata = {
    title: "Company List",
    description: "List of companies",
};

const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/websites?populate=*`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

type Props = {
    params: {
        id: string;
    }
}

export default async function Home({ params }: Props) {
    const data = await fetchData();

    // console.log("params.id:", params.id);
    
    // Log company details
    // data.forEach((website: { attributes: { company: { data: any } } }) => {
    //     console.log(website.attributes.company.data);
    // });

    // Filter data based on params.id
    const filteredData = data.filter((
        website: {
            attributes: {
                company: {
                    data: {
                        id: number;
                        attributes: {
                            name: string
                        }
                    }
                }
            }
        }) =>
        website.attributes.company?.data?.id === Number(params.id)
    );

    return (
        <>
            <Header title="Company List" />
            <main className="bg-gray-100 h-screen">
                <section id="services" className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 py-5">
                    <div className="flex flex-row flex-wrap justify-center gap-10">
                        {filteredData.map((website: {
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
                                href={website.attributes.url}
                                src={website.attributes.image?.data?.attributes?.url ? `http://localhost:1337${website.attributes.image.data.attributes.url}` : "/default-image.jpg"}
                                title={website.attributes.title}
                                content={website.attributes.website_detail?.data?.attributes?.content || "No content available"}
                                detail={Detail}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
