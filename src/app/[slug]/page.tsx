import Image from "next/image";
import img from "@/public/service-hero.jpg";
import { KeyPoint, Service } from "@/utils/services";
import Contact from "@/components/Contact";

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const response = await fetch(`http://localhost:3000/api/${slug}`);
  const { service } = (await response.json()) as { service: Service };

  return (
    <>
      <section className="h-[calc(65vh-16px)]   w-full bg-left-top bg-cover md:bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <Image
          src={img}
          alt="service hero"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={70}
        />
        <div className="relative text-white z-30 max-w-7xl mx-auto px-4 sm:px-6  top-[50%]">
          <h2 className="text-2xl font-semibold capitalize max-w-lg sm:text-3xl md:text-4xl">
            {service.title}
          </h2>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h3 className="text-xl font-semibold capitalize sm:text-2xl lg:text-3xl mb-4">
          {service.title}
        </h3>
        <p className="lg:max-w-5xl">{service.description}</p>
        <ul className="flex flex-col list-disc ml-8 gap-2 md:gap-4 mt-8 max-w-5xl ">
          {service.keyPoint.map((point: KeyPoint) => {
            return (
              <li key={point.title}>
                <p className="text-base lg:text-lg font-bold">{point.title}</p>
                {point.point}
              </li>
            );
          })}
        </ul>
      </div>
      <Contact />
    </>
  );
};

export default page;
