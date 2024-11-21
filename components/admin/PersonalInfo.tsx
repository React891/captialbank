import InformationLayout from "../global/InformationLayout";
import LabelValue from "../global/LabelValue";
import TitleEditBtn from "../global/TitleEditBtn"

export default function PersonalInfo() {
  return (
    <InformationLayout>
      <TitleEditBtn title="Personal Information" />
      <div className="grid mt-5 grid-cols-4 gap-4">
        <LabelValue label="Fullname" value="Anne Mayers Paige" labelStyle="text-gray-500" />
        <LabelValue label="Phone" value="anne@gmail.com" labelStyle="text-gray-500" />
        <LabelValue label="Email" value="+2313432342" labelStyle="text-gray-500" />
        <LabelValue label="Gender" value="Female" labelStyle="text-gray-500" />
        <LabelValue label="Date of Birth" value="20-04-1975" labelStyle="text-gray-500" />
        <LabelValue label="Occupation" value="Nurse" labelStyle="text-gray-500" />
        <LabelValue label="Marital Status" value="Single" labelStyle="text-gray-500" />
        <LabelValue label="Nationality" value="American" labelStyle="text-gray-500" />
      </div>
    </InformationLayout>
  );
}
