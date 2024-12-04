"use client"
import SoftwareCard from "@/app/components/software-card";
import Image from "next/image";
import { useState } from "react";

type Props = {
    data: [];
    companies: [];
}

export default function Content({ data, companies }: Props) {
    // const data = await fetchData();
    const [selectedCompany, setSelectedCompany] = useState("all"); // สถานะสำหรับเก็บ companyId ที่เลือก

    // ฟังก์ชันจัดการเมื่อผู้ใช้เลือกบริษัท
    const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCompany(event.target.value);
    };

    const filteredData = selectedCompany === "all"
        ? data // แสดงข้อมูลทั้งหมดเมื่อเลือก "all"
        : data.filter((
            website: {
                attributes: {
                    company: {
                        data: {
                            id: number;
                        };
                    };
                };
            }) => website.attributes.company?.data?.id === Number(selectedCompany));
    // console.log(filteredData.length);

    return (
        <>
            <div className="max-w-7xl mb-5 mx-auto">
                <select id="company" name="company" defaultValue="all" onChange={handleCompanyChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="all">All Companies</option>
                    {
                        companies.map((company: {
                            id: string;
                            attributes: {
                                name: string,
                            }
                        }) => (
                            <option key={company.id} value={company.id}>{company.attributes.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className={`max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10 ${filteredData.length === 0 ? "h-screen" : ""} `}>
                {filteredData.length === 0 ? (
                    <div>
                        <div className="text-center space-y-6 max-w-2xl mx-auto">
                            <h1 className="text-gray-500 font-semibold dark:text-white capitalize">No data available for the selected company</h1>
                        </div>
                        <Image src='/assets/images/no-data.png' height={500} width={500} alt="" priority unoptimized />
                    </div>
                ) : (
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
                                slug={website.id}
                                software_id={website.id}
                                image={website.attributes.image?.data?.attributes?.url ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_IMAGE}${website.attributes.image.data.attributes.url}` : "/assets/images/not-found.png"}
                                title={website.attributes.title || "No content available"}
                                company={website.attributes?.company?.data?.attributes?.name || ""}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
