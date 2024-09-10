import Image from "next/image";
import img from "@/public/portrait-male-security-guard-with-uniform.jpg";

const page = () => {
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
        />
        <div className="relative text-white z-30 max-w-7xl mx-auto px-4 sm:px-6  top-[50%]">
          <h2 className="text-2xl font-semibold capitalize max-w-lg sm:text-3xl md:text-4xl">
            Screening Services
          </h2>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h3 className="text-xl font-semibold capitalize sm:text-2xl lg:text-3xl mb-4">
          Screening Services
        </h3>
        <p className="text-balance">
          Our screening solutions tailored to the unique needs of the community.
          Our services ensure that all individuals, vehicles, and goods entering
          or operating within the area are thoroughly checked to maintain a safe
          and secure environment
        </p>
        <ul className="flex flex-col list-disc ml-8 gap-2 md:gap-4 mt-8 max-w-5xl">
          <li>
            <p className="text-base lg:text-lg font-bold">
              Personal and Employee Screening
            </p>
            <p className="text-sm md:text-base">
              We conduct detailed background checks on employees, contractors,
              and visitors to verify identity and ensure compliance with
              security protocols. This includes criminal record checks,
              employment history verification, and biometric screening.
            </p>
          </li>
          <li>
            <p className="text-base lg:text-lg font-bold">
              Vehicle Inspections
            </p>
            <p className="text-sm md:text-base ">
              Our team provides thorough vehicle inspections at community entry
              points, using both manual checks and advanced technology to detect
              unauthorized items or suspicious materials.
            </p>
          </li>
          <li>
            <p className="text-base lg:text-lg font-bold">Event Screening</p>
            <p className="text-sm md:text-base">
              For local events, we offer security screening solutions to control
              access, prevent the entry of weapons or prohibited items, and
              ensure public safety.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default page;
