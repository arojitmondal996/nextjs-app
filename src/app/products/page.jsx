import dbConnect from '@/lib/dbConnect';
import { redirect } from 'next/navigation';
import React from 'react';
import { getProducts } from '../actions/products/getProducts';

const page = async () => {
    // const res = await fetch("http://localhost:3000/api/items", {
    //     cache: "force-cache",
    // })
    // const data = await res.json();

    const data = await getProducts();

    // if (data.length > 3) {
    //     redirect("/");
    // }

    return (
        <ul className='text-center mt-8'>
            {
                data.map((singleProduct) => {
                    return <li key={singleProduct._id}>{singleProduct?.productName} </li>
                })
            }
        </ul>
    );
};

export default page;