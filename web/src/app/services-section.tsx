import CardComponent from "@/components/document/card";
import axios from "axios";

const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/services?populate=*`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export default async function Services() {
    const data = await fetchData();
    const sortedData = data.sort((a: any, b: any) => a.attributes.sequent - b.attributes.sequent);
    const color = [
        "bg-cyan-500",
        "bg-orange-500",
        "bg-teal-500",
        "bg-red-500",
        "bg-indigo-500",
        "bg-pink-500",
        "bg-purple-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-blue-500",
    ]

    return (
        <section id="service" className="services section bg-gray-100 py-16">
            <div className="container mx-auto text-center mb-12" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-4">Services</h2>
                <p className="text-lg text-gray-700">
                    แบบฟอร์มเอกสาร และซอฟแวร์ภายในองค์กร
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        sortedData.map((document: {
                            id: string;
                            attributes: {
                                title: string,
                                description: string,
                                link: string,
                            }
                        }, index: any) => (
                            <CardComponent
                                key={index}
                                color={color[index % color.length]}
                                title={document?.attributes?.title}
                                description={document?.attributes?.description}
                                link={document?.attributes?.link}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}