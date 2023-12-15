import { useState } from 'react'
import { useWriteDepositETH } from 'op-wagmi'
import { Address, parseEther } from 'viem'
import { baseGoerli } from 'wagmi/chains'

import Input from './Input'
import Button from './Button'
import { Dialog } from '@headlessui/react'

export function DepositContainer() {
    const [to, setTo] = useState('')
    const [amount, setAmount] = useState('')

    const { data: l1TxHash, status: writeStatus, writeDepositETHAsync, } = useWriteDepositETH()

    const handleClick = async () => {
        await writeDepositETHAsync({
            args: {
                to: to as Address,
                amount: parseEther(amount),
            },
            l2ChainId: baseGoerli.id,
        })
    }
    const getShortTxHash = (txHash: string) => `${txHash.slice(0, 12)}...`;

    return (
        <div className="mt-3 sm:mt-5">
            <Dialog.Title as="h3" className="text-base text-center font-semibold leading-6 text-gray-900">
                Bridge To Base
            </Dialog.Title>
            <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <Input label='To' name='to' value={to} setValue={setTo} />
                <Input label='Amount (ETH)' name='amount' value={amount} setValue={setAmount} />

                <div className="sm:col-span-12 flex justify-center items-center">
                    <Button onClick={handleClick}>Bridge</Button>
                </div>

                {writeStatus && l1TxHash && (
                    <div className='sm:col-span-12 flex flex-col justify-center items-center'>
                        <span className='text-black'>See the status of the transaction</span>
                        <a
                            className='text-blue-500 text-sm underline'
                            target='_blank'
                            rel='noreferrer'
                            href={`https://goerli.etherscan.io/tx/${l1TxHash}`}
                            title={l1TxHash}>
                            {getShortTxHash(l1TxHash)}
                        </a>
                    </div>
                )}
            </div>

        </div>

    )
}