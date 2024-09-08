import { links } from "@/utils/links";
import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="hidden lg:flex items-center lg:gap-x-10 xl:gap-x-14">
      {links.map((link) => {
        return (
          <Link
            href={link.url}
            key={link.key}
            className="text-base font-semibold capitalize hover:text-slate-700  transition-all duration-150"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
