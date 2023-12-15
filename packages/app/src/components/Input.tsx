type Props = {
    label: string
    placeholder?: string
    value: string
    setValue: (value: string) => void
    defaultValue?: string
    name: string
}

export default function ({ label, name, value, setValue, defaultValue }: Props) {
    return (
        <div className="sm:col-span-12">
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
            <div className="mt-2">
                <input value={value}
                    onChange={e => setValue(e.target.value)}
                    defaultValue={defaultValue}
                    type="text"
                    name={name}
                    id={name}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
        </div>
    )
}