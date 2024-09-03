import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";

const NavContact = () => {
  return (
    <header className="max-w-7xl mx-auto py-2 sm:px-6 ">
      <div className="flex items-center  justify-center gap-2 lg:justify-end lg:gap-4">
        <Link href={""} className="flex items-center gap-1 text-xs">
          <PhoneCall className="w-4 h-4" />
          011 533 8888
        </Link>
        <Link href={""} className="flex items-center gap-1 text-xs">
          <Mail className="h-4 w-4" />
          info@seeisee.com
        </Link>
      </div>
    </header>
  );
};

export default NavContact;
