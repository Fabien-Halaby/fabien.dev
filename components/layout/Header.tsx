import Link from "next/link";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 shadow-md">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="lg:text-4xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400" style={{ fontFamily: "var(--font-logo)" }}>
                    fabien.dev
                </Link>
            
                <ul className="hidden md:flex space-x-10 text-lg font-medium">
                    <li>
                        <Link href="/" className="hover:text-pink-400 transition-colors duration-300">
                            Home
                        </Link>
                    </li>
              
                    <li>
                        <Link href="/stack" className="hover:text-pink-400 transition-colors duration-300">
                            Stack
                        </Link>
                    </li>
              
                    <li>
                        <Link href="/project" className="hover:text-pink-400 transition-colors duration-300">
                            Project
                        </Link>
                    </li>
              
                    <li>
                        <Link href="/contact" className="hover:text-pink-400 transition-colors duration-300">
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="md:hidden">
                    <input type="checkbox" id="menu-toggle" className="hidden" />
                    <label htmlFor="menu-toggle" className="cursor-pointer space-y-1.5">
                        <span className="block w-6 h-0.5 bg-white rounded"></span>
                        <span className="block w-6 h-0.5 bg-white rounded"></span>
                        <span className="block w-6 h-0.5 bg-white rounded"></span>
                    </label>
              
                    <div id="menu" className="absolute right-6 top-16 bg-black/80 backdrop-blur-md rounded-lg shadow-lg p-6 flex-col space-y-4 hidden">
                        <Link href="/" className="hover:text-pink-400 transition-colors duration-300">
                            Home
                        </Link>
                
                        <Link href="/stack" className="hover:text-pink-400 transition-colors duration-300">
                            Stack
                        </Link>
                
                        <Link href="/project" className="hover:text-pink-400 transition-colors duration-300">
                            Project
                        </Link>
                
                        <Link href="/contact" className="hover:text-pink-400 transition-colors duration-300">
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}