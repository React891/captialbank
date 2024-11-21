import ActionCardList from "@/components/admin/ActionCardList";
import QuickLinkList from "@/components/admin/QuickLinkList";
import Button from "@/components/global/Button";
import Dropdown from "@/components/global/Dropdown";
import Title from "@/components/global/Title";
import { FaPlus } from "react-icons/fa6";

export default function page() {
  return (
    <div className="p-4 pt-2 flex flex-col justify- h-full">
      <div className="flex z-30 relative mb-5 items-center justify-between">
        <Title title="Quick Links" />
        <div className="flex gap-5">
          <Button
            title="Create Account"
            icon={<FaPlus size={18} />}
            style={{ background: "green" }}
          />
          <Dropdown />
        </div>
      </div>
      <div className="">
        <QuickLinkList />
        <ActionCardList />
      </div>
    </div>
  );
}
