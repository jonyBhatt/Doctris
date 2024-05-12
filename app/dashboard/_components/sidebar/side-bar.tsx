import { auth } from "@/auth";
import Image from "next/image";
import { DocSidebar } from "./doc-sidebar";
import { PatientSidebar } from "./patient-sidebar";

export const Sidebar = async () => {
  const session = await auth();
  return (
    <aside className="bg-primary/65  text-primary-foreground w-64 flex-shrink-0">
      <div className="p-4 flex items-center gap-1.5">
        <Image src="/assets/logo.png" alt="logo" width={30} height={30} />
        <h2 className="font-ubuntu hidden md:flex font-bold text-3xl">
          CareSync
        </h2>
      </div>
      <nav className="px-4">
        {session?.user.role === "Doctor" ? (
          <>
            <DocSidebar />
          </>
        ) : (
          <>
            <PatientSidebar />
          </>
        )}
      </nav>
    </aside>
  );
};
