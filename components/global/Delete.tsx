import { BsTrash } from 'react-icons/bs'
export default function Delete() {

    return (
        <div className="h-10 cursor-pointer hover:scale-110 active:scale-100 duration-300 w-10 grid place-content-center rounded-full bg-white">
            <span className="text-xl text-red-600">
                <BsTrash />
            </span>
        </div>
    )
}
