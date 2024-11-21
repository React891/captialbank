type Props = {
    icon?: any
    title: string
    style?: React.CSSProperties
    type?: string
}

export default function Button({ icon, title, style, type }: Props) {
    return (
        <div style={style} className={`px-3.5 text-white flex relative backdrop-blur-lg items-center gap-2 cursor-pointer duration-300 hover:scale-105 active:scale-100 font-medium py-3 rounded-full text-sm h-fit border-2 border-white bg-gradient-to-tr`}>
            {icon && <span className='inline text-xs'>
                {icon}
            </span>
            }
            {title}
        </div>)
}
