import { Button } from "@/components/ui/button";
//  import img2 from "@/public/crowd.jpeg";
import img5 from "@/public/access-control.jpg";
import img2 from "@/public/crowd-security.jpg";
import img6 from "@/public/guards.jpg";
import img3 from "@/public/patrol-security.jpg";
import img1 from "@/public/screen.jpg";
import img4 from "@/public/staff-escort.jpg";

// logo
import access from "@/public/access-conrol.png";
import concierge from "@/public/conciege.png";
import escort from "@/public/escorting.png";
import guard from "@/public/guard.png";
import patrol from "@/public/patrol.png";
import crowd from "@/public/people.png";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-16 lg:py-24 ">
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
              Screening Security Officers
            </p>
            <p className="text-sm mb-4">
              We insure high safety and reliability through comprehensive
              personnel vetting.
            </p>
            <Button variant="link" asChild>
              <Link
                href={"/screening-service"}
                className="flex items-center gap-1 text-lg font-bold"
              >
                Explore More <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
          <div className="relative h-full w-full">
            <Image
              src={img1}
              alt="a guard"
              objectFit="cover"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E15252]/20"></div>
          </div>
          {/* group-2 */}
          <div className="p-3  md:p-4  shadow-inner">
            <Image
              src={crowd}
              alt="icon guard"
              objectFit="cover"
              className="w-14 h-14 object-cover mb-4"
            />
            <p className="text-base  leading-tight font-bold mb-2 md:mb-3">
              Crowd Management
            </p>
            <p className="text-sm mb-4">
              Efficient crowd management services at community, ensuring safety
              and smooth operations during events and gatherings.
            </p>
            <Button variant="link" asChild>
              <Link
                href={"/crowd-management"}
                className="flex items-center gap-1 text-lg font-bold"
              >
                Explore More <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
          <div className="relative h-full w-full">
            <Image
              src={img2}
              alt="a guard in crowd"
              objectFit="cover"
              className="h-full w-full object-cover object-top "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E15252]/40"></div>
          </div>

          {/* group-4 */}
          <div className="p-3  md:p-4  shadow-inner">
            <Image
              src={escort}
              alt="icon guard"
              objectFit="cover"
              className="w-14 h-14 object-cover mb-4"
            />
            <p className="text-base  leading-tight font-bold mb-2 md:mb-3">
              Escorting Security Officers
            </p>
            <p className="text-sm mb-4">
              We offer professional escorting to ensure safe and secure travel
              and protection for individuals and groups.
            </p>
            <Button variant="link" asChild>
              <Link
                href={"/escorting-security-officers"}
                className="flex items-center gap-1 text-lg font-bold"
              >
                Explore More <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
          <div className="relative h-full w-full">
            <Image
              src={img4}
              alt="a guard in crowd"
              objectFit="cover"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E15252]/50"></div>
          </div>

          {/* group-5 */}

          <div className="p-3  md:p-4  shadow-inner">
            <Image
              src={access}
              alt="icon guard"
              objectFit="cover"
              className="w-14 h-14 object-cover mb-4"
            />
            <p className="text-base  leading-tight font-bold mb-2 md:mb-3">
              Access Control Security
            </p>
            <p className="text-sm mb-4">
              We offer reliable access control, limiting entry to authorized
              individuals for secure and controlled environments
            </p>
            <Button variant="link" asChild>
              <Link
                href={"/access-control-security"}
                className="flex items-center gap-1 text-lg font-bold"
              >
                Explore More <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
          <div className="relative h-full w-full">
            <Image
              src={img5}
              alt="a guard in crowd"
              objectFit="cover"
              className="h-full md:w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E15252]/30"></div>
          </div>
          {/* group-6 */}
          <div className="p-3  md:p-4  shadow-inner">
            <Image
              src={concierge}
              alt="icon guard"
              objectFit="cover"
              className="w-14 h-14 object-cover mb-4"
            />
            <p className="text-base  leading-tight font-bold mb-2 md:mb-3">
              Concierge
            </p>
            <p className="text-sm mb-4">
              We offer personalized assistance with vigilant protection,
              ensuring safety and convenience in secure environment
            </p>
            <Button variant="link" asChild>
              <Link
                href={"/concierge"}
                className="flex items-center gap-1 text-lg font-bold"
              >
                Explore More <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
          <div className="relative h-full w-full">
            <Image
              src={img6}
              alt="a guard in crowd"
              objectFit="cover"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E15252]/30"></div>
          </div>
          {/* group-3 */}
          <div className="p-3  md:p-4  shadow-inner">
            <Image
              src={patrol}
              alt="icon guard"
              objectFit="cover"
              className="w-14 h-14 object-cover mb-4"
            />
            <p className="text-base  leading-tight font-bold mb-2 md:mb-3">
              Patrolling
            </p>
            <p className="text-sm mb-4">
              Reliable patrolling at the community to maintain security and
              deter potential threats around the clock.
            </p>
            <Button variant="link" asChild>
              <Link
                href={"/patrolling"}
                className="flex items-center gap-1 text-lg font-bold"
              >
                Explore More <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
          <div className="relative h-full w-full">
            <Image
              src={img3}
              alt="a guard in crowd"
              objectFit="cover"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E15252]/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
