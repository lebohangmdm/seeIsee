import Image from "next/image";
import logo from "@/public/logo.png";
import { Instagram, FacebookIcon, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-8 pb-16 lg:pt-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid items-start mx-auto grid-cols-6  lg:grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] gap-12">
          <div className="flex flex-col justify-between gap-8  col-span-3 order-4  lg:order-1 lg:col-auto">
            <div className="relative flex items-center justify-center ">
              <Image
                src={logo}
                alt="logo"
                className="mx-auto w-12 h-12 object-cover  rounded-full  cursor-pointer relative backdrop-blur-none"
              />
              <span className="text-xs sm:text-sm lg:text-base italic absolute -bottom-6 md:-bottom-8">
                seeI<span className="text-red-500">see</span>
              </span>
            </div>
            <ul className="flex items-center justify-center gap-4 mt-4 md:mt-8 lg:gap-8">
              <Link href={""}>
                {" "}
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href={""}>
                <FacebookIcon className="w-6 h-6 shaded-icon" />
              </Link>
              <Link href={""}>
                <Twitter className="w-6 h-6" />
              </Link>
            </ul>

            <div>
              <p className="text-xs text-center md:text-sm lg:mt-20 lg:mb-4">
                Copyright &copy; {new Date().getFullYear()} by seeIsee, Inc.
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
          <div className="space-y-4  md:space-y-6 col-span-3 order-5 lg:order-2 lg:col-auto">
            <p className="text-sm font-semibold md:text-base lg:text-lg">
              Contact Us
            </p>
            <div className="flex flex-col gap-4 lg:gap-7">
              <p className="text-xs font-medium sm:text-base md:text-base">
                1 River St, Houghton Estate, Johannesburg, South Africa
              </p>
              <div>
                <p className="text-sm font-medium md:text-base">
                  +27 861 267 822
                </p>
                <p className="text-sm font-medium md:text-base">
                  info@seeisee.com
                </p>
              </div>
            </div>
          </div>
          <div className=" space-y-4  md:space-y-6 col-span-2 lg:col-auto lg:order-3">
            <p className="text-sm font-semibold md:text-base lg:text-lg">
              Quick Links
            </p>

            <ul className="flex flex-col gap-2 lg:gap-4 text-xs sm:text-sm lg:text-base ">
              <li>
                <Link href={""}>Home</Link>
              </li>
              <li>
                <Link href={""}>About Us</Link>
              </li>
              <li>
                <Link href={""}>Services</Link>
              </li>
              <li>
                <Link href={""}>Why Choose Us</Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-sm  md:text-base cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className=" space-y-4  md:space-y-6 col-span-2 lg:col-auto lg:order-4">
            <p className="text-sm font-semibold md:text-base lg:text-lg">
              Services
            </p>

            <ul className="flex flex-col gap-2 lg:gap-4 text-xs sm:text-sm lg:text-base ">
              <li>
                <Link href={""}>Screening</Link>
              </li>
              <li>
                <Link href={""}>Crowd Management</Link>
              </li>
              <li>
                <Link href={""}>Concierge</Link>
              </li>
              <li>
                <Link href={""}>Escorting Officers</Link>
              </li>
              <li>
                <Link href={""}>Access control</Link>
              </li>
              <li>
                <Link href={""}>Patrolling</Link>
              </li>
            </ul>
          </div>
          <div className=" space-y-4  md:space-y-6 col-span-2 lg:col-auto lg:order-5">
            <p className="text-sm font-semibold md:text-base lg:text-lg">
              Quick Links
            </p>

            <ul className="flex flex-col gap-4  lg:gap-4 text-xs sm:text-sm lg:text-base">
              <li>
                <Link href={""}>Home</Link>
              </li>
              <li>
                <Link href={""}>About Us</Link>
              </li>
              <li>
                <Link href={""}>Why Choose Us</Link>
              </li>
              <li>
                <Link href={""}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
