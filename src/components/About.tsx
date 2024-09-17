import img from "@/public/about.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 lg:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid items-center lg:grid-cols-[40%_60%] gap-16">
          <div className="hidden lg:block">
            <Image
              src={img}
              alt="security guard"
              objectFit="cover"
              className="mx-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold capitalize max-w-md sm:text-3xl md:text-4xl  mb-4">
              About seeI<span className="text-destructive">see</span>
            </h2>
            <div className="flex flex-col gap-4 md:gap-5 lg:max-w-[680px] ">
              <p className="text-sm  sm:text-base leading-5 ">
                At{" "}
                <span className="font-bold">
                  seeI<span className="text-destructive">see</span>
                </span>
                , we are committed to providing top-tier safety solutions
                tailored to meet the unique needs of our community. With deep
                roots in our community, we understand the challenges and
                dynamics of the area, enabling us to offer security services
                that are both effective and culturally aware. Our team consists
                of highly trained professionals dedicated to safeguarding your
                property, business, and loved ones.
              </p>
              <p className="text-sm  sm:text-base leading-5">
                We believe that safety is the foundation for a thriving
                community, and through innovative technology, quick response
                times, and local expertise, we strive to create a secure and
                peaceful environment for everyone Whether you need residential,
                commercial, or event security, our Security has you covered.
                Your safety is our priority, and we’re here to protect what
                matters most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
