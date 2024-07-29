// src/app/page.js
"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-2">
      <div className="absolute top-4 right-4 flex space-x-4">
        <Link href="/auth" className="flex items-center space-x-2 text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faSignInAlt} />
          <span>user</span>
        </Link>
      </div>
      <h1 className="text-4xl font-bold">Welcome to Next.js Custom Auth</h1>
      
    </div>
  );
}
