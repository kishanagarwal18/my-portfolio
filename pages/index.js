import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">I'm a web developer specializing in JavaScript, React, and Next.js.</p>
      
      <Link href="/projects">
        <a className="mt-8 text-blue-600 hover:text-blue-800">Check out my projects</a>
      </Link>
    </div>
  );
}
