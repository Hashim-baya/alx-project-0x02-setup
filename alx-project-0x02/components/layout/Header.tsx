import React from 'react';
import Link from 'next/link';
const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Application</h1>
      <nav>
       <ul className='flex space-x-4 list-none'>
        <Link href="/about"><li>About</li></Link>
        <Link href="/home"><li>Home</li></Link> 
        <Link href="/posts"><li>Posts</li></Link>
       </ul>
      </nav>
    </header>
  );
};

export default Header;