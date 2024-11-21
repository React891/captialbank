import { Pencil } from 'lucide-react'

export default function PenButton() {
    return (
        <button className="h-12 w-12 rounded-full grid duration-300 hover:scale-105 active:scale-95 group place-content-center shadow-md shadow-black/30 text-xs uppercase bg-gradient-to-tr from-[#00008b] to-black border-2 border-white text-white font-semibold ">
            <Pencil size={18} className="group-hover:rotate-[360deg] duration-500" />
        </button>
    )
}
