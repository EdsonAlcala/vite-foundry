import { useState } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import ConnectionModal from './ConnectionModal';

export default function ConnectButton() {
    const { connect } = useConnect();
    const { address } = useAccount();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const truncateAddress = (address: any) =>
        address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : '';

    const handleConnect = () => {
        connect({ connector: injected() });
    };

    return (
        <div>
            {!address ? (
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={handleConnect}>
                    Connect
                </button>
            ) : (
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => setIsModalOpen(true)}>
                    {truncateAddress(address)}
                    <span className="ml-2">▼</span>
                </button>
            )}

            {address && <ConnectionModal open={isModalOpen} setOpen={setIsModalOpen} />}

        </div>
    );
}
