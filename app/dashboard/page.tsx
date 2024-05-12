import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  return (
    <div>
      {session?.user.role === "Doctor" ? (
        <>{redirect("/dashboard/doctor-dashboard")}</>
      ) : (
        <>{redirect("/dashboard/patient-dashboard")}</>
      )}
    </div>
  );
}
