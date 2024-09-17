// import hero from "@/public/hero3.png";
import hero from "@/public/hero.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-16px)]   w-full bg-left-top bg-cover md:bg-center bg-no-repeat relative">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <Image
        src={hero}
        alt="a security guard background hero"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-white ">
        <div className="w-3/4 md:w-1/2 absolute z-30">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight   mb-5 md:mb-8 lg:mb-10 lg:max-w-[600px]">
            Your <span className="text-destructive">Safety</span>, Our{" "}
            <span className="text-destructive">Priority</span>. Trust Us to Keep
            You Safe <span className="tracking-wide">24/7</span>
          </h1>
          <p className="text-sm leading-relaxed  md:text-base lg:text-lg tracking-wide max-w-xl mb-8">
            At{" "}
            <span className="font-bold">
              seeI<span className="text-destructive">see</span>
            </span>
            , your safety is our mission. We’re more than just security
            guards—we’re your neighbors, dedicated to creating a safer
            environment for our community. With 24/7 protection and a deep
            understanding of local needs, we stand as the first line of defense
            for your home, business, and events.
          </p>

          <Button
            variant={"destructive"}
            className="text-base tracking-wide py-3  px-6 cursor-pointer bg-red-600 hover:bg-red-700 transition-all duration-200 md:text-lg"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
