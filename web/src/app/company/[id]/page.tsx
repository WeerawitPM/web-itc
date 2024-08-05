import CardComponent from "@/components/company/card";
import Header from "@/components/header";
import Detail from "./detail";
import { Metadata } from "next";
import axios from "axios";

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const data = await fetchData();
    const website = data.find((website: { attributes: { company: { data: { id: number } } } }) =>
      website.attributes.company?.data?.id === Number(params.id)
    );
  
    const name = website ? website.attributes.company.data.attributes.name : "Company";
  
    return {
      title: `${name}`,
      description: `Details about ${name}`,
    };
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

    const companyName = filteredData.length > 0 ? filteredData[0].attributes.company.data.attributes.name : "Company List";

    return (
        <>
            <Header title={companyName} />
            <main className="h-screen">
                <section id="services" className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 py-5">
                    <div className="flex flex-row flex-wrap justify-start gap-10">
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
                                href={website.attributes.url || "No content available" }
                                src={website.attributes.image?.data?.attributes?.url ? `${process.env.STRAPI_BASE_IMAGE}${website.attributes.image.data.attributes.url}` : "/assets/images/not-found.png"}
                                title={website.attributes.title || "No content available"}
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
