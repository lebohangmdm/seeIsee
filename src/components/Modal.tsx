import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import logo from "@/public/logo.png";
import { User } from "lucide-react";
import Image from "next/image";

export default function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="py-2 px-4 border-background hover:border hover:border-slate-400 transition-all duration-200 cursor-pointer"
          asChild
        >
          <span className="flex items-center gap-1 text-lg font-semibold">
            <User className="h-6 w-6" /> Login
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[375px]">
        <DialogHeader className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-y-0.5 relative ">
            <Image
              src={logo}
              alt="logo"
              className="h-12 w-12 mx-auto object-cover rounded-full  cursor-pointer"
            />
            <span className="text-xs sm:text-sm lg:text-base italic absolute -bottom-6 ">
              seeI<span className="text-red-500">see</span>
            </span>
          </div>
          <DialogTitle className="pt-8 lg:text-lg">
            Enter your email address
          </DialogTitle>
          {/* <DialogDescription>Enter your email</DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 pt-4">
          <div>
            <Input id="email" type="email" placeholder="Email address" />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full hover:bg-red-700 duration-200 transition-all"
          >
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
