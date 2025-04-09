import AnimalCarousel from '@/components/animal/AnimalCarousel';
import AnimalGallery from '@/components/animal/AnimalGallery';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { FaCamera, FaQuestionCircle, FaShoppingCart, FaHistory } from 'react-icons/fa';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function Home() {
  if (!API_URL) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined');
  }

  let animals = [];
  
  try {
    const response = await fetch(`${API_URL}/api/animals`);
    if (!response.ok) {
      throw new Error('Failed to fetch animals');
    }
    animals = await response.json();
  } catch (error) {
    console.error('Error fetching animals:', error);
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="relative lg:flex space-x-10 font-extrabold pl-42 pt-4 py-2">
        <div className='relative lg:flex space-x-1'>
            <Link href="/cameras" className="flex items-center hover:bg-yellow-700 transition bg-green-700 text-white rounded-xl p-2">
              <FaCamera className="mr-2" /> Cameras
            </Link>
            <Link href="/trivia" className="flex items-center hover:bg-yellow-700 transition bg-green-700 text-white rounded-xl p-2">
              <FaQuestionCircle className="mr-2" /> Trivia
            </Link>
            <Link href="/shop" className="flex items-center hover:bg-yellow-700 transition bg-green-700 text-white rounded-xl p-2">
              <FaShoppingCart className="mr-2" /> Shop
            </Link>
            <Link href="/recent" className="flex items-center hover:bg-yellow-700 transition bg-green-700 text-white rounded-xl p-2">
              <FaHistory className="mr-2" /> Recently Watched
            </Link>
        </div>

          </div>
      <div className="container mx-auto ">
        <AnimalCarousel/>
      </div>
      <div className="container mx-auto px-4 py-8">
        <AnimalGallery animals={animals} />

      </div>
      <Footer />
    </main>
  );
}