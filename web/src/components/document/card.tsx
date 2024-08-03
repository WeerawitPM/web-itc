import Link from "next/link";

type Props = {
    key: string;
    color: string
    title: string;
    description: string;
    link: string;
};
// bg-cyan-500
export default function CardComponent({ key, color, title, description, link }: Props) {
    return (
        <div key={key} className={`service-item ${color} text-white p-6 rounded-lg shadow-md relative`} data-aos="fade-up" data-aos-delay="100">
            {/* <i className="bi bi-broadcast text-4xl mb-4"></i> */}
            <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-base mt-2 mb-4">{description}</p>
                <Link href={link} className="text-white underline" target="_blank">Learn More <i className="bi bi-arrow-right ml-1"></i></Link>
            </div>
        </div>
    )
}