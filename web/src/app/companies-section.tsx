import Image from "next/image"
import Link from "next/link";

type Props = {
    src: string;
    href: string;
    name: string;
}

const CompanyCard = ({ src, href, name }: Props) => {
    return (
        <Link href={{
            pathname: href,
            // query: {
            //     name: name
            // }
        }}>
            <div className="p-4 sm:p-5 rounded-lg border border-gray-100 dark:border-gray-900 group">
                <Image src={src} width={150} height={100} alt={name} className="h-32 sm:h-32 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105" />
            </div>
        </Link>
    )
}

type Data = {
    data: []
}

export default function Company({ data }: Data) {
    const sortedData = data.sort(
        (a: {
            attributes: {
                sequent: number
            }
        }, b: {
            attributes: {
                sequent: number
            }
        }) => a.attributes.sequent - b.attributes.sequent);

    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-950" id="companies">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
                <div className="text-center space-y-6 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">Our Companies</h1>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    {
                        sortedData.map((company: {
                            id: string;
                            attributes: {
                                name: string,
                                image: {
                                    data: {
                                        attributes: {
                                            url: string;
                                        }
                                    }
                                }
                            }
                        }, index: number) => (
                            <div key={index}>
                                <CompanyCard
                                    src={company.attributes.image?.data?.attributes?.url ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_IMAGE}${company.attributes.image.data.attributes.url}` : "/assets/images/not-found.png"}
                                    href={`/company/${company.id}`}
                                    name={company.attributes.name}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
