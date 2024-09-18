import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";
import Modal from "@/components/Modal";

const NavBtns = () => {
  return (
    <div className="hidden lg:flex items-center gap-3">
      <Button
        variant="destructive"
        className="py-2 px-4  transition-all duration-200 hover:bg-red-700 cursor-pointer"
        asChild
      >
        <Link
          href={"/login"}
          className="flex items-center gap-1 text-lg font-semibold"
        >
          Get In Touch
        </Link>
      </Button>
      <Modal />
    </div>
  );
};

export default NavBtns;
