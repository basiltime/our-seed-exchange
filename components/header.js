import Link from 'next/link';
import { RiMenu3Line } from "react-icons/ri";
export default function Header() {

    return (
        <header className="bg-lime-100">
            <nav className="container mx-auto nav p-5">
                <ul className="block md:flex flex-row flex-nowrap justify-end">
                    <li className="px-2">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link href="/register">Create Account</Link>
                    </li>
                    <li className="px-2">
                        <Link href="/login">Log In</Link>
                    </li>
                    <li>
                        <Link href="/trades">Browse Trades</Link>
                    </li>
                </ul>
                <button id="nav-toggle" className="nav-toggle"><RiMenu3Line /></button>
            </nav>
      </header>
    )
    
}