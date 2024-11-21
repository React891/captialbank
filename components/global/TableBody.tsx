type Props = {
    sn?: number
    length?: number
    data: any[]
}

export default function TableBody({ sn, length, data }: Props) {
    const style = 'p-4 text-sm'
    return (
        <>
            {
                data.map((el, key) => (
                    <tr className={`${key !== data.length - 1 && "border-b-2 border-gray-900"} group duration-500 cursor-pointer relative group overflow-hidden after:absolute after:w-0 after:h-full 
                    ${el.status === "pending" && "after:from-[yellow] after:to-black"}
                    ${el.status === "success" && "after:from-[green] after:to-black"}
                    ${el.status === "failed" && "after:from-[red] after:to-black"}
                    ${el.status === "blocked" && "after:from-[red] after:to-black"}
                    ${el.status === "on-hold" && "after:from-[gray] after:to-black"}
                    after:top-0 ${key % 2 === 0 ? "after:left-0 after:bg-gradient-to-tl" : "after:right-0 after:bg-gradient-to-tr"}  hover:after:w-full after:duration-500 after:z-[-1] z-30`}
                        key={key}>
                        {Object.entries(el).map((el, key2) => (
                            <>
                                {el[0] === "fullName"
                                    ?
                                    <td key={key2} className={`${style} flex items-center gap-2`}>
                                        <span className='h-10 w-10 shrink-0 border-2 rounded-full'></span>
                                        <span className=" ">{el[1] as string}</span>
                                    </td>
                                    :
                                    <td key={key2} className={`${style} 
                                    ${el[0] === 'status' && 'capitalize'}
                                    ${el[1] === 'pending' && 'text-amber-500 group-hover:text-white duration-300'}
                                    ${el[1] === 'failed' && 'text-red-500 group-hover:text-white duration-300'}
                                    ${el[1] === 'success' && 'text-green-500 group-hover:text-white duration-300'}
                                    `}>
                                        {el[1] === true && "Active"}
                                        {el[1] === false && "Inactive"}
                                        {(el[1] !== true && el[1] !== false) && el[1] as string}
                                    </td>
                                }
                            </>
                        ))}
                    </tr >
                ))
            }
        </>
    )
}
{/* <td className={`${style} flex items-center gap-2`}>
                    <span className='h-10 w-10 shrink-0 border-2 rounded-full'></span>
                    <span>Anne Mayers</span>
                </td> */}