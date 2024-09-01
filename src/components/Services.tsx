import { Button } from "@/components/ui/button";
import img1 from "@/public/service-1.jpg";
import img2 from "@/public/crowd.jpeg";
import guard from "@/public/guard.png";
import { MoveRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className="pt-16">
      <div className="max-w-7xl mx-auto  ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <div className="p-3 md:p-4 shadow-inner">
            <Image
              src={guard}
              alt="icon guard"
              objectFit="cover"
              className="w-14 h-14 object-cover mb-4"
            />
            <p className="text-base  leading-tight font-bold mb-2 md:mb-3">
              Licensed Security Officers
            </p>
            <p className="text-sm mb-4">
              Our licensed security officers, expertly trained to deliver
              reliable, professional protection for your safety.
            </p>
            <Button variant="link" asChild>
              <Link
                href={"/services/offices"}
                className="flex items-center gap-1 text-lg font-bold"
              >
                Explore More <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src={img1}
              alt="a guard"
              objectFit="cover"
              className="h-full w-full object-cover"
            />
          </div>
          {/* group-2 */}
          <div className="p-3  md:p-4  shadow-inner">
            <Image
              src={guard}
              alt="icon guard"
              objectFit="cover"
              className="w-14 h-14 object-cover mb-4"
            />
            <p className="text-base  leading-tight font-bold mb-2 md:mb-3">
              Licensed Security Officers
            </p>
            <p className="text-sm mb-4">
              Our licensed security officers, expertly trained to deliver
              reliable, professional protection for your safety.
            </p>
            <Button variant="link" asChild>
              <Link
                href={"/services/offices"}
                className="flex items-center gap-1 text-lg font-bold"
              >
                Explore More <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src={img1}
              alt="a guard in crowd"
              objectFit="cover"
              className="h-full w-full object-cover object-top "
            />
          </div>
          {/* group-3 */}
          <div className="p-3  md:p-4  shadow-inner">
            <Image
              src={guard}
              alt="icon guard"
              objectFit="cover"
              className="w-14 h-14 object-cover mb-4"
            />
            <p className="text-base  leading-tight font-bold mb-2 md:mb-3">
              Licensed Security Officers
            </p>
            <p className="text-sm mb-4">
              Our licensed security officers, expertly trained to deliver
              reliable, professional protection for your safety.
            </p>
            <Button variant="link" asChild>
              <Link
                href={"/services/offices"}
                className="flex items-center gap-1 text-lg font-bold"
              >
                Explore More <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src={img2}
              alt="a guard in crowd"
              objectFit="cover"
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* group-4 */}
          <div className="p-3  md:p-4  shadow-inner">
            <Image
              src={guard}
              alt="icon guard"
              objectFit="cover"
              className="w-14 h-14 object-cover mb-4"
            />
            <p className="text-base  leading-tight font-bold mb-2 md:mb-3">
              Licensed Security Officers
            </p>
            <p className="text-sm mb-4">
              Our licensed security officers, expertly trained to deliver
              reliable, professional protection for your safety.
            </p>
            <Button variant="link" asChild>
              <Link
                href={"/services/offices"}
                className="flex items-center gap-1 text-lg font-bold"
              >
                Explore More <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src={img2}
              alt="a guard in crowd"
              objectFit="cover"
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* group-5 */}
          <div className="p-3  md:p-4  shadow-inner">
            <Image
              src={guard}
              alt="icon guard"
              objectFit="cover"
              className="w-14 h-14 object-cover mb-4"
            />
            <p className="text-base  leading-tight font-bold mb-2 md:mb-3">
              Licensed Security Officers
            </p>
            <p className="text-sm mb-4">
              Our licensed security officers, expertly trained to deliver
              reliable, professional protection for your safety.
            </p>
            <Button variant="link" asChild>
              <Link
                href={"/services/offices"}
                className="flex items-center gap-1 text-lg font-bold"
              >
                Explore More <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src={img2}
              alt="a guard in crowd"
              objectFit="cover"
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* group-6 */}
          <div className="p-3  md:p-4  shadow-inner">
            <Image
              src={guard}
              alt="icon guard"
              objectFit="cover"
              className="w-14 h-14 object-cover mb-4"
            />
            <p className="text-base  leading-tight font-bold mb-2 md:mb-3">
              Licensed Security Officers
            </p>
            <p className="text-sm mb-4">
              Our licensed security officers, expertly trained to deliver
              reliable, professional protection for your safety.
            </p>
            <Button variant="link" asChild>
              <Link
                href={"/services/offices"}
                className="flex items-center gap-1 text-lg font-bold"
              >
                Explore More <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src={img2}
              alt="a guard in crowd"
              objectFit="cover"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
