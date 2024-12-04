import SoftwareCard from "@/app/components/software-card";
import axios from "axios";
import Image from "next/image";

const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/websites?pagination[pageSize]=1000&populate=*`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export default async function Content({ id }: { id: string }) {
    const data = await fetchData();
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
        website.attributes.company?.data?.id === Number(id)
    );

    const companyName = filteredData.length > 0 ? filteredData[0].attributes.company.data.attributes.name : "Software Not Available";

    if (companyName === "Software Not Available") {
        return (
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10 h-screen">
                <div className="text-center space-y-6 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">Software Not Available</h1>
                    {/* <p className="text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perferendis eos amet eum repudiandae aspernatur mollitia quos consectetur voluptatibus pariatur
                    </p> */}
                </div>
                <Image src='/assets/images/no-data.png' height={500} width={500} alt="" priority unoptimized />
            </div>
        );
    }
    return (
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
            <div className="text-center space-y-6 max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">{companyName}</h1>
                {/* <p className="text-gray-700 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perferendis eos amet eum repudiandae aspernatur mollitia quos consectetur voluptatibus pariatur
                </p> */}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        };
                        company?: {
                            data?: {
                                id: number;
                                attributes?: {
                                    name: string;
                                }
                            }
                        };
                    }
                }) => (
                    <SoftwareCard
                        key={website.id}
                        slug={id}
                        software_id={website.id}
                        image={website.attributes.image?.data?.attributes?.url ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_IMAGE}${website.attributes.image.data.attributes.url}` : "/assets/images/not-found.png"}
                        title={website.attributes.title || "No content available"}
                        company={website.attributes?.company?.data?.attributes?.name || ""}
                    />
                ))}
            </div>
        </div>
    )
}
