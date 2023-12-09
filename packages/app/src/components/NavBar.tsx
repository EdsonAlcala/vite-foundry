import { ConnectButton } from '@rainbow-me/rainbowkit';

import Logo from './Logo';

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center px-16 py-4">
            <Logo />
            <ConnectButton />
        </nav>
    )
}