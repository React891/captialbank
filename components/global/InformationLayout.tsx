import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function InformationLayout({ children }: Props) {
    return (
        <div className="p-4 text-white border-2 rounded-2xl shadow-md mt-7">
            {children}
        </div>
    )
}
