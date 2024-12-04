import Image from "next/image"

type Props = {
    name: string;
    position: string;
    image: string;
};

const TeamCard = ({ name, position, image }: Props) => {
    return (
        <div className="flex flex-row gap-4 p-3 rounded-md bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/80">
            <div className="w-1/4 h-[150px]">
                <Image
                    src={image}
                    alt="post cover"
                    width={1300}
                    height={730}
                    className="rounded h-full w-full object-cover"
                />
            </div>
            <div className="flex-1 flex flex-col space-y-2 my-auto">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {name}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                    {position}
                </p>
            </div>
        </div>
    );
};

type Data = {
    data: [];
}

export default function TeamSection({ data }: Data) {
    const sortedData = data.sort((
        a: {
            attributes: {
                sequent: number;
            };
        },
        b: {
            attributes: {
                sequent: number;
            };
        }) => a.attributes.sequent - b.attributes.sequent);

    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-950" id="teams">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
                <div className="flex flex-col gap-y-8 items-center md:items-start md:flex-row md:justify-between">
                    <div className=" mx-auto text-center">
                        <h2 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-3xl xl:text-3xl leading-tight">Team Develop IT Center</h2>
                        <p className="text-gray-600 mt-4 text-base">
                            ทีมนักพัฒนาระบบซอฟแวร์
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {
                        sortedData.map((team: {
                            id: string;
                            attributes: {
                                name: string,
                                position: string,
                                description: string,
                                image?: { data?: { attributes?: { url?: string } } };
                            }
                        }, index: number) => (
                            <div key={index}>
                                <TeamCard
                                    name={team?.attributes?.name}
                                    position={team?.attributes?.position}
                                    image={team.attributes.image?.data?.attributes?.url ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_IMAGE}${team?.attributes?.image?.data?.attributes?.url}` : "/assets/images/not-found.png"}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
