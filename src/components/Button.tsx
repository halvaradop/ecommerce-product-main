interface Props {
    className: String,
    children: JSX.Element | string, 
    color: string, 
    size: string,
    onClick: () => void
}

interface ColorVariants {
    [key: string]: string
}

interface SizeVariants {
    [key: string]: string
}

const Button = ({ className, children, color, size, onClick }: Props) => {
    const colorVariants: ColorVariants = {
        "orange": "text-white font-bold bg-orange focus:outline-none shadow-2xl shadow-orange"
    }
    const sizeVariants: SizeVariants = {
        sm: "h-5 px-1 text-sm rounded-md"
    }
    const classList = `${colorVariants[color]} ${sizeVariants[size]} ${className}`
    
    return (
        <button className={classList} onClick={onClick}>
            {children}
        </button>
    )
}

export { Button }