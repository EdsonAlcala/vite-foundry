type ButtonProps = {
    onClick: () => void
    children: React.ReactNode
    disabled?: boolean
}

export default function ({ onClick, children, disabled }: ButtonProps) {
    return (
        <button
            disabled={disabled}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onClick}>
            {children}
        </button>
    )
}