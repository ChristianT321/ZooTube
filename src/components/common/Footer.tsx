import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/animals" className="hover:text-yellow-300 transition">
                  All Animals
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-yellow-300 transition">
                  Your Local Zoos!
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-yellow-300 transition">
                  Animal Holidays
                </Link>
              </li>
              <li>
                <Link href="/conservation" className="hover:text-yellow-300 transition">
                  Conservation
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MdEmail className="mr-2 text-yellow-300" />
                <span>sait@zootube.com</span>
              </div>
              <div className="flex items-center">
                <MdPhone className="mr-2 text-yellow-300" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="pt-2">
                <p>123 Zoo Tube</p>
                <p>Wildlife Calgary City, DK 394959</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-2xl hover:text-yellow-300 transition">
                <FaInstagram />
              </Link>
              <Link href="#" className="text-2xl hover:text-yellow-300 transition">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-2xl hover:text-yellow-300 transition">
                <FaFacebook />
              </Link>
              <Link href="#" className="text-2xl hover:text-yellow-300 transition">
                <FaYoutube />
              </Link>
            </div>

            <div className="mt-6">
                <div>
                    <h4 className="text-lg font-medium mb-2">ZooTube NewsLetter :3</h4> 
                    <button className="bg-yellow-600 hover:bg-green-700 px-4 py-2 rounded-r transition">
                    Subscribe
                    </button>
                </div>
              
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-gray-800 rounded-l focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ZooTube. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}