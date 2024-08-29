import { Button } from "@/components/ui/button";
import { LogInIcon, User } from "lucide-react";
import Link from "next/link";

const LoginBtn = () => {
  return (
    <div className="hidden lg:block">
      <Button
        variant="destructive"
        className="rounded-full py-3 px-6  transition-all duration-200 hover:bg-red-700 cursor-default"
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

export default LoginBtn;
