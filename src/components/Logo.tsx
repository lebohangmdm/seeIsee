import Image from "next/image";
import Link from "next/link";
import img from "@/public/logo.png";

const Logo = () => {
  return (
    <Link href={"/"} className="flex flex-col gap-y-0.5">
      <Image
        src={img}
        alt="logo"
        className="h-10 w-10 mx-auto object-cover rounded-full border border-destructive p-1 cursor-pointer"
      />
      <span className="text-xs sm:text-sm lg:text-base italic ">
        seeI<span className="text-red-500">see</span>
      </span>
    </Link>
  );
};

export default Logo;
