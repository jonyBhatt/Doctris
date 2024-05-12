"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import UploadButton from "@/components/upload-button";
import { medRecordSchema } from "@/utils/schema";
import { uploadRecords } from "@/lib/action/patinet/med-record";
import { useTransition } from "react";
import toast from "react-hot-toast";

export const UploadRecordForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof medRecordSchema>>({
    resolver: zodResolver(medRecordSchema),
    defaultValues: {
      file: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof medRecordSchema>) {
    console.log(values);
    startTransition(() => {
      uploadRecords(values).then((data) => {
        if (data?.success) return toast.success("Submitted!");
      });
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-28">
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Record</FormLabel>
              <FormControl>
                <UploadButton
                  endpoint="pdfUploader"
                  value={field.value}
                  onChange={field.onChange}
                  className="ml-8"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
