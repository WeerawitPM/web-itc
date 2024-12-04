import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Company",
    description: "this is a company",
};

type Params = Promise<{ slug: string }>

export default async function Home(props: { params: Params }) {
    // console.log(params);
    const params = await props.params;
    const slug = params.slug;
    // console.log("Slug:", slug);

    return (
        <section className="relative pt-32 pb-5 dark:bg-gray-950 flex">
            <Content id={slug} />
        </section>
    );
}
