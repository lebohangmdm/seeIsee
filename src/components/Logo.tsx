import Image from "next/image";
import Link from "next/link";
import img from "@/public/logo.png";

const Logo = () => {
  return (
    <Link href={"/"} className="flex flex-col items-center gap-y-0.5 relative ">
      <Image
        src={img}
        alt="logo"
        className="h-8 w-8 mx-auto object-cover rounded-full  cursor-pointer"
      />
      <span className="text-xs sm:text-sm lg:text-base italic absolute top-5 ">
        seeI<span className="text-red-500">see</span>
      </span>
    </Link>
  );
};

export default Logo;
