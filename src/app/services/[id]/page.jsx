import React from 'react';

const page = ({ params }) => {
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
    const id = params?.id;
    const singleData = data.find((d) => d._id == id);
    if (singleData) {
        return (
            <div className=''>
                <h1>Service Details Page</h1>
                <p>ID: {id}</p>
                <p>{singleData.country}</p>
                <img className='max-w-[400px] space-y-4' src={singleData.image} alt="" />
            </div>
        );
    }
    else {
        return <>
        <p>Not Found</p>
        </>
    }

};

export default page;