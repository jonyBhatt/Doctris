"use client";

import { useState } from "react";

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
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { signUpSchema, USERROLE } from "@/utils/schema";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { showToast } from "@/components/ui/show-toast";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Step {
  id: string;
  title: string;
}

const steps: Step[] = [
  { id: "1", title: "hello" }, // Replace with your step 1 component
  { id: "2", title: "hello" }, // Replace with your step 2 component
  { id: "3", title: "hello" },
];

export default function SignUpForm() {
  const router = useRouter();
  const [currentSteps, setCurrentSteps] = useState(1);
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      confirmpassword: "",
      password: "",
      email: "",
      role: USERROLE[1],
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (res.ok) {
        toast.success("User Created");
        router.push("/sign-in");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  // Handle Previous
  const handlePrevious = () => {
    if (currentSteps > 1) {
      setCurrentSteps(currentSteps - 1);
    }
  };
  // Handle Next
  const handleNext = () => {
    setCurrentSteps(currentSteps + 1);
  };

  return (
    <div className="flex gap-6 flex-col w-full items-center">
      <div className="bg-muted py-4 px-16 rounded w-full">
        <div className="flex space-x-8 justify-center items-center w-full ">
          {steps.map((step, i) => (
            <>
              <div
                className={`py-2  px-4 rounded-full border ${
                  String(currentSteps) === step.id
                    ? "bg-primary text-white font-ubuntu  font-bold"
                    : "bg-accent text-white"
                } `}
                key={step.id}
              >
                {step.id}
              </div>
              {i !== steps.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="w-24 bg-secondary h-1"
                />
              )}
            </>
          ))}
        </div>
      </div>
      {/** Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-10/12"
        >
          {/** Step 1 */}
          {currentSteps === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Last name */}
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
          {/** Step 2 */}
          {currentSteps === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Confirm password */}
              <FormField
                control={form.control}
                name="confirmpassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Role */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="space-y-3 my-4">
                    <FormLabel className="font-medium font-inter">
                      Start As
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center gap-4"
                        orientation="horizontal"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={USERROLE[0]} />
                          </FormControl>
                          <FormLabel className="font-normal">Doctor</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={USERROLE[1]} />
                          </FormControl>
                          <FormLabel className="font-normal">Patient</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={USERROLE[2]} />
                          </FormControl>
                          <FormLabel className="font-normal">Nurse</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={USERROLE[3]} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Radiologist
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={USERROLE[4]} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Pharmacist
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={USERROLE[5]} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Finance Officer
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={USERROLE[6]} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Laboratory
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={USERROLE[7]} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Technician
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={USERROLE[8]} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Receptionist
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
          {/** Step 3 */}
          {currentSteps === 3 && (
            <div className="my-5 flex flex-col items-center justify-center">
              <h2 className="font-ubuntu font-semibold tracking-wider text-3xl">
                Congratulations!
              </h2>
              <Image
                src={"/assets/undraw_well_done_re_3hpo.svg"}
                alt="Congress"
                width={500}
                height={500}
              />
            </div>
          )}

          {currentSteps === 3 && (
            <div className="py-8">
              <Button type="submit" size="lg" className="w-full">
                Continue
              </Button>
            </div>
          )}
        </form>
      </Form>
      {/** Previous and next Button */}
      <div
        className={`my-4 flex justify-between items-center w-full ${
          currentSteps === 3 ? "hidden" : ""
        } `}
      >
        <Button
          size="icon"
          className="rounded-full hover:bg-inherit"
          variant="outline"
          disabled={currentSteps === 1}
          onClick={handlePrevious}
        >
          <ArrowLeftCircle className="w-6 h-6 hover:text-primary transition-colors duration-100" />
        </Button>
        <Button
          size="icon"
          className="rounded-full hover:bg-inherit"
          variant="outline"
          onClick={handleNext}
        >
          <ArrowRightCircle className="w-6 h-6 hover:text-primary transition-colors duration-100" />
        </Button>
      </div>
    </div>
  );
}
