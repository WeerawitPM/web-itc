"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import CardComponent from '@/components/teams/card';

export default function TeamSection() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/teams?populate=*`);
                const sortedData = response.data.data.sort((a: any, b: any) => a.attributes.sequent - b.attributes.sequent);
                setData(sortedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section id="team" className="bg-white py-16">
            {/* Section Title */}
            <div className="container mx-auto text-center mb-12" data-aos="fade-up">
                <h2 className="text-3xl font-bold">Team Develop ITC Center</h2>
                <p className="text-gray-600 mt-4">
                    ทีมนักพัฒนาระบบซอฟแวร์
                </p>
            </div>
            {/* End Section Title */}

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="300">
                    {/* Team Member */}
                    {data.map((team: any, index: number) => (
                        <div key={index}>
                            <CardComponent
                                name={team.attributes.name}
                                position={team.attributes.position}
                                src={team.attributes.image?.data?.attributes?.url ? `${process.env.STRAPI_BASE_IMAGE}${team.attributes.image.data.attributes.url}` : "/assets/images/not-found.png"}
                                description={team.attributes.description}
                            />
                        </div>
                    ))}
                    {/* End Team Member */}
                </div>
            </div>
        </section>
    );
}
