import CardComponent from "@/components/company/card";
import Header from "@/components/header";
import Detail from "./detail";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "VCST",
    description: "This is VCST page",
  };

export default function Home() {
    return (
        <>
            <Header title="VCST"/>
            <main className="bg-gray-100 h-screen">
                <section id="services" className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 py-5">
                    <div className="flex flex-row flex-wrap justify-center gap-10">
                        <CardComponent href="https://www.youtube.com" src="/assets/images/vcst.png" title="Print tag" detail={Detail} />
                    </div>
                </section>
            </main>
        </>
    );
}