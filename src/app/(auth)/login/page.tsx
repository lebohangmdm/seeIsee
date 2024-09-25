"use client";
import "@/app/globals.css";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios, { AxiosResponse } from "axios";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import logo from "@/public/logo.png";
import { LoginData } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const page = () => {
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await axios.post("/api/login", data);
      // console.log(response);

      router.push("/dashboard");
      return;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios error
        console.error("Axios error: ", error);
        toast({
          title: error.response?.data.error,
          description: error.response?.data.message,
        });
      } else {
        // Handle other errors
        console.error("Unknown error: ", error);
        toast({
          title: "Something went Wrong. Please try later",
        });
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center ">
      <Card className="w-[350px]">
        <CardHeader className="mx-auto space-y-6">
          <div className="flex flex-col items-center gap-y-0.5 relative ">
            <Image
              src={logo}
              alt="logo"
              className="h-7 w-7 mx-auto object-cover rounded-full  cursor-pointer"
            />
            <span className="text-xs sm:text-sm lg:text-base italic absolute top-5 ">
              seeI<span className="text-red-500">see</span>
            </span>
          </div>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@mail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
