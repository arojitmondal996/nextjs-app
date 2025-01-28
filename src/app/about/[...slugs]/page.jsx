import React from 'react';

const page = async ({params}) => {
    const p = await params;
    console.log(p)
    return (
        <div>
            About Slug Pages
        </div>
    );
};

export default page;