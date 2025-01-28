import Link from 'next/link';
import React from 'react';

const page = () => {
    // Static Data
    const data = [
        {
            _id: 56889564654564,
            image: "/images/d1.jpg",
            country: "France",
            travelers: "150,000",
        },
        {
            _id: 878566546454645,
            image: "/images/d2.jpg",
            country: "USA",
            travelers: "250,000",
        },
        {
            _id: 58468544546546,
            image: "/images/d3.jpg",
            country: "Italy",
            travelers: "180,000",
        },
        {
            _id: 4,
            image: "/public/images/d2.jpg",
            country: "Japan",
            travelers: "200,000",
        },
        {
            _id: 874987254564698,
            image: "/images/d5.jpg",
            country: "Australia",
            travelers: "120,000",
        },
        {
            _id: 878974654644,
            image: "/images/d6.jpg",
            country: "Canada",
            travelers: "175,000",
        },
        {
            _id: 564666458498,
            image: "/images/d7.jpg",
            country: "Germany",
            travelers: "160,000",
        },
        {
            _id: 6556468345655,
            image: "/images/d8.jpg",
            country: "Brazil",
            travelers: "140,000",
        },
    ];

    return (
        <div>
            <p className='font-bold text-3xl'> Services page</p>
            {
                data.map((d) => {
                    return (<div className='space-y-4'>
                        <Link href={`/services/${d._id}`}>
                            <img src={d.image} alt="" />
                        </Link>
                    </div>)
                })
            }
        </div>
    );
};

export default page;