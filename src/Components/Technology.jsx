import React from 'react';

const Technology = ({icon, name}) => {
    const Icon = icon
    return (
        <div className='flex items-center gap-3'>
            <Icon className='w-8 h-8'/>
            {name}
        </div>
    );
};

export default Technology;