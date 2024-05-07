"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/utils/schema";
import Link from "next/link";
export const SignInForm = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
  }
  return (
    <div className="my-8 w-full">
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mx-auto w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">
                  Your Email <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
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
                <FormLabel className="text-lg">
                  Password <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="rounded w-full">
            Sign In
          </Button>
        </form>
      </Form>
      <div className="my-6 flex flex-col items-center gap-7">
        <p className="text-lg text-center  font-inter text-muted-foreground">
          Or
        </p>
        <p className="text-base text-center flex items-center gap-4 font-normal  font-inter text-muted-foreground">
        Don&apos;t have an account? <Link href="/sign-up" className="font-bold text-base text-secondary-foreground">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
