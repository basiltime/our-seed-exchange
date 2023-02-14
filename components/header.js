import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/register">Create Account</Link>
                    </li>
                    <li>
                        <Link href="/login">Log In</Link>
                    </li>
                    <li>
                        <Link href="/trades">Browse Trades</Link>
                    </li>
                </ul>
            </nav>
      </header>
    )
    
}