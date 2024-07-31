import Card from "@/components/home/card";

export default function Company() {
    return (
        <section id="services" className="services section bg-gray-100 py-16">
            <div className="container mx-auto text-center mb-12" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-4">Our Company Website</h2>
                <p className="text-lg text-gray-700">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-5 gap-4 justify-center items-center mt-4 mx-10">
                    <Card src="/assets/images/vcst.png" href="/company/vcst"/>
                </div>
            </div>
        </section>
    );
}