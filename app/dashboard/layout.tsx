import { Metadata } from "next";
import { ReactNode } from "react";
import { Sidebar } from "./_components/sidebar/side-bar";
export const metadata: Metadata = {
  title: "CareSync | Dashboard",
  description:
    "This is a doctor appointment and get best e-medical service in Bangladesh",
};
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex h-dvh overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-4 overflow-y-auto">{children}</main>
    </section>
  );
}
