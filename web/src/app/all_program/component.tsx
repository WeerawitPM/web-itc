'use client'
import { useState } from "react";
import Detail from "./detail";
import CardComponent from "@/components/company/card";
import Header from "@/components/header";
import { Select } from '@chakra-ui/react'

export default function Component({ data, companyData }: { data: any[]; companyData: any[]; }) {
    const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_IMAGE;
    console.log(STRAPI_BASE_URL);
    const [selectedCompany, setSelectedCompany] = useState(""); // สถานะสำหรับเก็บ companyId ที่เลือก

    // ฟังก์ชันจัดการเมื่อผู้ใช้เลือกบริษัท
    const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCompany(event.target.value);
    };

    // กรองข้อมูลเว็บไซต์ตาม companyId ที่เลือก
    const filteredData = selectedCompany
        ? data.filter((
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
            website.attributes.company?.data?.id === Number(selectedCompany))
        : data; // หากไม่ได้เลือกบริษัท แสดงข้อมูลทั้งหมด

    return (
        <>
            <Header title={"All"} />
            <section id="services" className="mx-auto p-4 max-w-[1280px]">
                <div className="mb-5">
                    <Select placeholder='All' onChange={handleCompanyChange}>
                        {
                            companyData.map((company: {
                                id: string;
                                attributes: {
                                    name: string,
                                }
                            }) => (
                                <option key={company.id} value={company.id}>{company.attributes.name}</option>
                            ))
                        }
                    </Select>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-10">
                    {filteredData.map((
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
                            src={website.attributes.image?.data?.attributes?.url ? `${STRAPI_BASE_URL}${website.attributes.image.data.attributes.url}` : "/assets/images/not-found.png"}
                            title={website.attributes.title || "No content available"}
                            content={website.attributes.website_detail?.data?.attributes?.content || "No content available"}
                            detail={Detail}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
