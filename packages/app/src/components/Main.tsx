import { useAccount } from 'wagmi'

import ConnectedView from '../views/ConnectedView';

export default function Main() {
    const { isConnected } = useAccount()

    return (
        <main className="flex flex-col mt-16 items-center justify-center">

            <h1 className="text-4xl font-bold">Welcome to Next.js</h1>

            {isConnected && <ConnectedView />}

        </main>
    )
}