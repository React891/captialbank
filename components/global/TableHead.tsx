type Props = {
    data: string[]
}

export default function TableHead({ data }: Props) {
    return (
        <tr className="border-b-2 border-white">
            {data.map((el, key) => (
                <th key={key} className={`px-4 capitalize py-5 text-15 font-medium text-start`}>{el}</th>
            ))}
        </tr>
    )
}
