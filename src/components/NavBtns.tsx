import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

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
      <Button
        variant="outline"
        className="py-2 px-4 border-background hover:border hover:border-slate-400 transition-all duration-200 cursor-pointer"
        asChild
      >
        <Link
          href={"/login"}
          className="flex items-center gap-1 text-lg font-semibold"
        >
          <User className="h-6 w-6" /> Login
        </Link>
      </Button>
    </div>
  );
};

export default NavBtns;
