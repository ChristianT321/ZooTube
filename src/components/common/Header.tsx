import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';


export default function Header() {
  return (
    <header className="bg-yellow-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
        <div className="flex space-x-4 py-3">
    	    {/* Logo or Icon SHOULD be added here */}
            <Link href="/" className="text-4xl font-extrabold">
            ZooTube
          </Link>
        </div>
        

          <div className="flex items-center space-x-4 font-extrabold text-xl" >
            <Link href="/help" className="hover:text-green-200 transition">
                Help
            </Link>
            <Link href="/donate" className="hover:text-green-200 transition">
              <span className="hidden md:inline">Donate :)</span>
              <FiHeart size={20} className="md:hidden" />
            </Link>
            <Link href="/account" className="hover:text-green-200 transition">
              <span className="hidden md:inline ml-1">My Account</span>
            </Link>
          </div>
        </div>

        <button className="md:hidden mt-2 text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}