import { useState } from 'react'

interface ColorProps {
    colorClass: string
    shade: number
}

export default function Color({ colorClass, shade }: ColorProps) {
    const [btnText, setBtnText] = useState<string | number>(shade)

    function copyStyle(colorClass: string, shade: number) {
        navigator.clipboard.writeText(colorClass)
        setBtnText('Copied!')
        setTimeout(() => {
            setBtnText(shade)
        }, 2000)
    }
    return (
        <div className={`${colorClass} h-[11.111%] flex items-center justify-center`}>
            <button
                className='level font-bold text-white opacity-0 w-full h-full hover:opacity-100 text-center'
                onClick={() => copyStyle(colorClass, shade)}
            >
                {btnText}
            </button>
        </div>
    )
}
