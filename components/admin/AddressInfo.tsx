import InformationLayout from "../global/InformationLayout";
import LabelValue from "../global/LabelValue";
import TitleEditBtn from "../global/TitleEditBtn";

export default function AddressInfo() {
  return (
    <InformationLayout>
      <TitleEditBtn title="Address Information" />
      <div className="grid mt-5 grid-cols-3 gap-4">
        <LabelValue label="Country " value="United States of America"/>
        <LabelValue label="Postal Code " value="101231"/>
        <LabelValue label="State  " value="Illinios"/>
        <LabelValue label="City  " value="Springfield"/>
        <LabelValue label="Street  " value="1234 Mapple Avenue"/>
      </div>
    </InformationLayout>
  );
}
