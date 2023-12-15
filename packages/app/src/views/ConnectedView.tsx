// import { useSimpleStorageRead } from '../generated'
import { useState } from "react";

import Button from "../components/Button";
import BridgeModal from "../components/BridgeModal"

export default function ConnectedView() {

    // const { data: simpleStorageValue } = useSimpleStorageRead({
    //     functionName: 'storedData'
    // })
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <div className='flex flex-col items-center mt-4'>
            <p className="text-xl">You are connected to the blockchain!</p>

            {/* {simpleStorageValue !== undefined && (
                <p className='mt-4'>The simple storage value is {formatEther(simpleStorageValue)}</p>
            )} */}

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-12 flex justify-center items-center">
                    <Button onClick={() => setIsModalOpen(true)}>Not ETH ? Bridge to Base</Button>
                </div>
            </div>

            <BridgeModal open={isModalOpen} setOpen={setIsModalOpen} />
        </div>
    )
}