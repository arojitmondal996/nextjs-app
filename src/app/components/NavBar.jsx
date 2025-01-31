"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const pathname = usePathname();
    console.log(pathname, pathname.includes('dashboard'));
    if (!pathname.includes('dashboard')) {
        return (
            <div>
                <nav className='flex justify-center'>
                    <ul className='flex justify-between gap-5'>
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <Link href="/services">
                            <li>Services</li>
                        </Link>
                        <Link href="/about">
                            <li>About</li>
                        </Link>
                        <Link href="/post">
                            <li>Post</li>
                        </Link>
                        <Link href="/products">
                            <li>Products</li>
                        </Link>
                        <Link href="/products/add">
                            <li>Add Products</li>
                        </Link>
                        <Link href="/meals">
                            <li>Meals</li>
                        </Link>
                        <Link href="/register">
                            <li>Register</li>
                        </Link>

                    </ul>
                </nav>
            </div>
        );
    }
    else {
        return
        <></>;
    }

};

export default NavBar;