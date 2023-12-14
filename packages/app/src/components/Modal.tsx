import { useAccount, useDisconnect } from 'wagmi';

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
        <div
            className={`${open ? 'block' : 'hidden'
                } fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true">
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        className={`relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 ${open
                            ? 'opacity-100 translate-y-0 sm:scale-100'
                            : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            }`}>
                        <div>
                            <div className="mt-3 text-center sm:mt-5">
                                <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                                    Your wallet address
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {address}
                                    </p>
                                </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

