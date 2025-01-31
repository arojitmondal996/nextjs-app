"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const about = () => {
    const router = useRouter();
    const isLoggedIn = true;
    const handleNavigation = () => {
        if (isLoggedIn){
            router.push("/about/address");
        }else {
            router.push("/")
        }
    };
    return (
        <div>
            <p className="font-bold text-3xl">About Page</p>
            <Link href="/about/address">
                Address page
            </Link>
            <button type='button' onClick={handleNavigation}>Address page</button>
        </div>
    );
};

export default about;