import { getRecords } from "@/lib/action/patinet/med-record";
import PatientRecordsComp from "../../_components/doctor/patient-records";

export default async function PatientRecords() {
  const data = [
    {
      name: "Calvin Carlo",
      record: "Record1",
      image: "/assets/doc1.jpg",
      link: "#",
    },
    {
      name: "Cristino Murphy",
      record: "Record1",
      image: "/assets/doc2.jpg",
      link: "#",
    },
    {
      name: "Alia Reddy",
      record: "Record1",
      image: "/assets/doc3.jpg",
      link: "#",
    },
    {
      name: "Toni Kovar",
      record: "Record1",
      image: "/assets/doc4.jpg",
      link: "#",
    },
  ];

  const record = await getRecords();
  console.log(record);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-inter text-3xl tracking-wide font-bold">
        Medical Records
      </h2>
      <div>
        <div className="overflow-x-auto">
          <PatientRecordsComp data={record} />
        </div>
      </div>
    </div>
  );
}
