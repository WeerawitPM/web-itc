import axios from "axios";
import CardComponent from '@/components/teams/card';

const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/teams?populate=*`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export default async function TeamSection() {
    const data = await fetchData();
    const sortedData = data.sort((a: any, b: any) => a.attributes.sequent - b.attributes.sequent);

    return (
        <section id="team" className="bg-white py-16">
            {/* Section Title */}
            <div className="mx-auto text-center mb-12" data-aos="fade-up">
                <h2 className="text-3xl font-bold">Team Develop ITC Center</h2>
                <p className="text-gray-600 mt-4">
                    ทีมนักพัฒนาระบบซอฟแวร์
                </p>
            </div>
            {/* End Section Title */}

            <div className="mx-auto lg:px-28 md:px-16 sm:px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="300">
                    {/* Team Member */}
                    {
                        sortedData.map((team: {
                            id: string;
                            attributes: {
                                name: string,
                                position: string,
                                description: string,
                                image?: { data?: { attributes?: { url?: string } } };
                            }
                        }, index: any) => (
                            <div key={index}>
                                <CardComponent
                                    name={team?.attributes?.name}
                                    position={team?.attributes?.position}
                                    src={team.attributes.image?.data?.attributes?.url ? `${process.env.STRAPI_BASE_IMAGE}${team?.attributes?.image?.data?.attributes?.url}` : "/assets/images/not-found.png"}
                                    description={team?.attributes?.description}
                                />
                            </div>
                        ))
                    }
                    {/* End Team Member */}
                </div>
            </div>
        </section>
    );
}
