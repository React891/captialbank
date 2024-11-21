"use client";
import Link from "next/link";
import LabelValue from "../global/LabelValue";

export default function AccountModal() {
  const opened = false;


  return (
    <div className={`grid ${opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} origin-top-right w-[750px] duration-500`}>
      <div className={`border-2 text-white  w-full duration-500 bg-black/40 p-5 rounded-2xl shadow-lg shadow-black/20`}>
        <div className="flex items-center gap-4">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex gap-5 items-center">
                <img alt="" className="h-24 w-24" src="" />
                <Link href={"/accounts/5"} className="text-2xl duration-300 hover:text-blue-500 hover:underline font-semibold">
                  Anne Mayers Paige
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <div className="grid mb-5 text-[15px] grid-cols-3 gap-5">
            <LabelValue label="Fullname" value={`Anne Mayers Paige `}/>
            <LabelValue label="Phone Number" value={"+123828747723"}/>
            <LabelValue label="Email" value={'Anne23@iCloud.com'}/>
            <LabelValue label="Date of Birth" value={'02-05-1955'}/>
            <LabelValue label="Country" value={"United Stated"}/>
            <LabelValue label="Currency" uppercase value={"USD"}/>
            <LabelValue label="Residential Address" value={"1 Hacker Way, Menlo Park California"}/>
            <LabelValue label="Occupation" value={"Nurse"}/>
            <LabelValue label="Marital Status" capitalize value={"Married"}/>
            <LabelValue label="Account Type" capitalize value={"Current"}/>
            <LabelValue label="Account Number" value={"2322232311"}/>
            <LabelValue label="Current Balance" value={"23000"}/>
            <LabelValue label="Available Balance" value={"0"}/>
            <LabelValue label="COT" value={"232323"}/>
            <LabelValue label="IMF Number" value={"21231"}/>
            <LabelValue label="PIN" value={'1234'}/>
            <LabelValue label="Password" value={'helloPeopl2@'}/>
          </div>
        </div>
      </div>
    </div>
  );
}
