import { useSimpleStorageRead } from '../generated'
import { formatEther } from 'viem'

export default function ConnectedView() {
    const { data: simpleStorageValue } = useSimpleStorageRead({
        functionName: 'storedData'
    })

    return (
        <div className='flex flex-col items-center mt-4'>
            <p className="text-xl">You are connected to the blockchain!</p>

            {simpleStorageValue !== undefined && (
                <p className='mt-4'>The simple storage value is {formatEther(simpleStorageValue)}</p>
            )}
        </div>
    )
}