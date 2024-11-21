import InformationLayout from "../global/InformationLayout";
import LabelValue from "../global/LabelValue";
import TitleEditBtn from "../global/TitleEditBtn";

export default function IdentificationTaxInfo() {
  return (
    <InformationLayout>
      <TitleEditBtn title="Identification & Tax Information" />
      <div className="grid mt-5 grid-cols-2 gap-4">
        <LabelValue label="COT " value="3233263028"/>
        <LabelValue label="IMF " value="IGHSFG6215"/>
      </div>
    </InformationLayout>
  );
}
