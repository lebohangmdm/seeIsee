import Image from "next/image";
import img from "@/public/choose.png";
import { Check, CheckCircle, CheckCircle2 } from "lucide-react";

const Choose = () => {
  return (
    <section className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-y-12 md:grid-cols-2 md:gap-y-0 md:gap-x-8  lg:gap-x-20">
          <div className="">
            <h2 className="text-xl font-semibold capitalize max-w-md sm:text-2xl md:text-3xl mb-4 md:mb-6">
              Why Our Security Guards Are the Best Choice for Your Safety
            </h2>
            <div className="flex flex-col gap-2 md:gap-4 mb-6 md:mb-8 lg:mb-8 ">
              <p className="text-sm  sm:text-base lg:text-lg  ">
                We understand the unique challenges and needs of our community.
                Our team of dedicated security guards is from the area, so they
                know the ins and outs of the neighborhood.
              </p>
              <p className="text-sm  sm:text-base lg:text-lg">
                With a deep commitment to protecting our own, we offer reliable,
                effective, and culturally aware security services. Whether it's
                for your home, business, or community event, trust{" "}
                <span className="font-bold">
                  seeI<span className="text-destructive">see</span>
                </span>{" "}
                Security to keep you and your loved ones safe. We're here for
                you, by people who understand you.
              </p>
            </div>

            <ul className="ml-8 flex flex-col gap-2 sm:gap-3 md:gap-6">
              <li className="text-sm md:text-base font-bold list-disc">
                Count on our team to provide consistent and vigilant security
                around the clock.
              </li>
              <li className="text-sm md:text-base font-bold list-disc">
                Our guards are fully trained professionals with a deep
                understanding of security protocols.
              </li>
              <li className="text-sm md:text-base font-bold list-disc">
                We prioritize the safety and well-being of the local community,
                offering personalized and responsive security solutions.
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={img}
              alt="A patrolling at night"
              objectFit="cover"
              className="w-[60%] sm:w-[70%] md:w-[80%] mx-auto lg:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
