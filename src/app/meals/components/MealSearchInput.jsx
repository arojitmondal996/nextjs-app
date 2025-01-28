"use client";
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const MealSearchInput = () => {
    // const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url);
    }, [search])
    return (
        <div>
            <div className='flex justify-center'>
                <input className='bg-red-700 ' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
        </div>
    );
};

export default MealSearchInput;