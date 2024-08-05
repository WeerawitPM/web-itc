"use client";
import Card from "@/components/home/card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Company() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/companies?populate=*`);
        const sortedData = response.data.data.sort((a: any, b: any) => a.attributes.sequent - b.attributes.sequent);
        setData(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="company" className="services pt-16 pb-24">
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Our Companies</h2>
        {/* <p className="text-lg text-gray-700">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p> */}
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap gap-10 justify-center items-center mt-4 mx-10" data-aos="fade-up" data-aos-delay="300">
          {
            data.map((company: any, index: number) => (
              <div key={index}>
                <Card
                  src={company.attributes.image?.data?.attributes?.url ? `${process.env.STRAPI_BASE_IMAGE}${company.attributes.image.data.attributes.url}` : "/assets/images/not-found.png"}
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
