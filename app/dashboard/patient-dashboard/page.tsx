import SearchBar from "@/components/shared/search";
import { getSearchDoctor } from "@/lib/action/doc/doctors";
import { AllDoctors } from "../_components/patient/all-doctors";

export default async function PatientDashboard({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  // console.log(searchParams.query);
  const doc = await getSearchDoctor(searchParams.query);
  // console.log(doc);
  if(!doc) return null;

  return (
    <div className="flex flex-col gap-8">
      <SearchBar className=" border border-muted bg-secondary" />
      <div className="mt-4 container mx-auto">
        <AllDoctors user={doc} />
      </div>
    </div>
  );
}
