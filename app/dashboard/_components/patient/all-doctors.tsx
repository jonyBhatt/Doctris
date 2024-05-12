import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User } from "@prisma/client";
import Link from "next/link";

interface DoctorUser {
  user: User[];
}

export const AllDoctors = ({ user }: DoctorUser) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {user.map((u) => (
        <Card key={u.id}>
          <div className="flex justify-center items-center py-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={u.image as string} className="" />
              <AvatarFallback>{u.firstname?.slice(0, 1)}</AvatarFallback>
            </Avatar>
          </div>
          <Separator />
          <CardHeader>
            <CardTitle>{u.firstname}</CardTitle>
            <CardDescription>M.B.B.S</CardDescription>
          </CardHeader>
          <Separator />
          <CardFooter className="py-5">
            <Link
              href={`/dashboard/patient-dashboard/doctors/${u.id}`}
              className="w-full"
            >
              <Button className="w-full">View Details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
