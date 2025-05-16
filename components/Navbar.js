import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-2xl font-semibold">My Portfolio</a>
        </Link>
        <div className="space-x-4">
          <Link href="/projects">
            <a className="text-white hover:text-gray-200">Projects</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-gray-200">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-white hover:text-gray-200">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
