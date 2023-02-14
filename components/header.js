import Link from 'next/link';
import { RiMenu3Line } from "react-icons/ri";
import { useState } from 'react';

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <header className="bg-lime-100">
            <nav className="container mx-auto nav p-5">
            <button id="nav-toggle" className="nav-toggle" onClick={() => setNavbarOpen((prev) => !prev)}><RiMenu3Line /></button>
                <ul className={`block md:flex flex-row flex-nowrap justify-end mt-4 md:mt-auto ${navbarOpen ? 'show-menu' : ''}`}>
                    <li className="pl-4">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="pl-4">
                        <Link href="/register">Create Account</Link>
                    </li>
                    <li className="pl-4">
                        <Link href="/login">Log In</Link>
                    </li>
                    <li className="pl-4">
                        <Link href="/trades">Browse Trades</Link>
                    </li>
                </ul>
                
            </nav>
      </header>
    )
    
}