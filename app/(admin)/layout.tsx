import Sidebar from "@/components/admin/Sidebar";
import LayoutTopNav from "@/components/global/LayoutTopNav";

type Props = {
  children: React.ReactNode
}

export default function layout({ children }: Props) {
  return (
    <div className="h-screen grid overflow-y-auto grid-cols-[300px_1fr]">
      <Sidebar />
      <div className="h-full flex overflow-y-auto flex-col">
        <div className="h-20 border-b-2">
          <LayoutTopNav />
        </div>
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
