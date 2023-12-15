import { useAccount, useDisconnect } from 'wagmi';
import { Dialog } from '@headlessui/react'

import ModalWrapper from './ModalWrapper';

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function ({ open, setOpen }: Props) {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <ModalWrapper open={open} setOpen={setOpen}>
            <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Your wallet address
                </Dialog.Title>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        {address}
                    </p>
                </div>
            </div>
            <div className="mt-5 sm:mt-6">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => {
                        disconnect();
                        closeModal();
                    }}>
                    Disconnect
                </button>
            </div>
        </ModalWrapper>
    );
};

