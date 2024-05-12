"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@prisma/client";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UploadedFile {
  id: string;
  file: string; // URL to the uploaded file
  userId: string; // ID of the user who uploaded the file
  createdAt: Date;
  user: User; // The user who uploaded the file
}

interface Props {
  data: UploadedFile[] | null;
}
export default function PatientRecordsComp({ data }: Props) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient ? (
        <>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                  Record
                </th>
              </tr>
            </thead>
            <tbody className="">
              {data?.map((row, index) => (
                <tr key={index} className="cursor-pointer hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Avatar>
                      <AvatarImage src={row.user.image as string} />
                      <AvatarFallback>
                        {row.user.firstname?.slice(0, 1) as string}
                      </AvatarFallback>
                    </Avatar>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {row.user.firstname}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={row.file}
                      download
                      className="text-sm text-gray-900"
                    >
                      {row.file}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
