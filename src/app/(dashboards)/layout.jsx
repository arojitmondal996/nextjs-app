import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <div className='grid grid-cols-12 w-full'>
                {/* Side Nav */}
                <div className='col-span-3'>
                    <ul>
                        <li>User list</li>
                    </ul>
                </div>
                {/* Dashboard Content */}
                <div className='col-span-9'>{children}</div>
            </div>
        </div>
    );
};

export default layout;