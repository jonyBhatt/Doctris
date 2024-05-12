import UploadRecords from "../../_components/patient/upload-records";

export default function MedicalRecords() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-inter text-3xl tracking-wide font-bold">
        Medical Records
      </h2>
      <div className="mt-4">
        <UploadRecords />
      </div>
    </div>
  );
}
