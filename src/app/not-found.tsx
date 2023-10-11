"use client"
import Link from 'next/link';
import React from 'react';
const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-2xl text-gray-700">Oops! Page not found</p>
            <p className="text-lg text-gray-600">The page you are looking for might have been removed or is temporarily unavailable.</p>
            <Link href="/" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;

