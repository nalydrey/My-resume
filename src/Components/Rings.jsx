import React from 'react';

const Rings = () => {
    return (
        <div className='top-0 absolute w-full h-full mx-auto' >
            <span className='block animate-spin  w-full h-full border-8 border-t-blue-400 border-b-blue-400 border-transparent  rounded-full'></span>
            <span className='absolute top-[5%] left-[5%]  block animate-time  w-[90%] h-[90%] border-8 border-t-yellow-400 border-b-yellow-400 border-transparent  rounded-full'></span>
        </div>
    );
};

export default Rings;