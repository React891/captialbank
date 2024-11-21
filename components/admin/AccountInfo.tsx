import InformationLayout from "../global/InformationLayout";
import LabelValue from "../global/LabelValue"
import TitleEditBtn from "../global/TitleEditBtn";

export default function BankInfo() {
  return (
    <InformationLayout>
      <TitleEditBtn title="Bank Information" />
      <div className="grid mt-5 grid-cols-4 gap-4">
        <LabelValue label="Bank Name" value="First Union Bank" labelStyle="text-gray-500" />
        <LabelValue label="Account Number " value="2635422428" labelStyle="text-gray-500" />
        <LabelValue label="Routing Number " value="3233263028" labelStyle="text-gray-500" />
        <LabelValue label="Account Type" value="Checking" labelStyle="text-gray-500" />
        <LabelValue label="Status" value="Pending" labelStyle="text-gray-500" />
      </div>
    </InformationLayout>
  );
}
