import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import prisa from "@/public/Psira.jpg";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-5 md:justify-evenly">
      <ul className="flex flex-col gap-4 text-base lg:text-lg lg:gap-6 font-semibold">
        <li>
          <Link href={""} className="flex items-center gap-4">
            <span>
              <MapPin className="h-6 w-6" />
            </span>
            1 River St, Houghton Estate, Johannesburg, South Africa
          </Link>
        </li>
        <li>
          <Link href={""} className="flex items-center gap-4">
            <span>
              <PhoneCall className="h-6 w-6" />
            </span>
            +27 861 267 822 | +27 878 030 040
          </Link>
        </li>
        <li>
          <Link href={""} className="flex items-center gap-4">
            <span>
              <Mail className="h-6 w-6" />
            </span>
            info@seeisee.com
          </Link>
        </li>
      </ul>
      <div>
        <Image
          src={prisa}
          alt="Prisa logo"
          objectFit="cover"
          width={140}
          height={140}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
