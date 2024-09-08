"use client";

import { links } from "@/utils/links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isAuth = true;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="lg:hidden">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Menu className="h-6 w-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`${isMobile ? "w-screen h-screen" : ""} p-4 mt-4`}
        >
          {links.map((link) => (
            <DropdownMenuItem key={link.key} className="text-lg py-2" asChild>
              <Link href={link.url}>{link.name}</Link>
            </DropdownMenuItem>
          ))}

          {isAuth && (
            <DropdownMenuItem
              key={"login"}
              className="text-lg py-2 mt-5 "
              asChild
            >
              <Button
                variant={"ghost"}
                asChild
                className="transition-all duration-200  cursor-pointer"
              >
                <Link href={"/login"} className="flex items-center gap-1">
                  <User className="w-6 h-6" />
                  Login
                </Link>
              </Button>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem
            key={"contact"}
            className="text-lg py-2 mt-5 "
            asChild
          >
            <Button
              variant={"destructive"}
              asChild
              className="transition-all duration-200 hover:bg-red-700 cursor-pointer"
            >
              <Link href={"/login"} className="flex items-center gap-1">
                <User className="w-6 h-6" />
                Get in Touch
              </Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MenuDropdown;
