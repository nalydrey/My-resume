import React from 'react';

const ContactString = ({string, icon}) => {
    const Icon = icon || null
    return (
        <div className="flex items-center gap-2">
            {Icon && <Icon className='stroke-2 stroke-orange-500 w-10 h-10'/>}
            <p className="laptop:text-2xl text-xl font-medium">{string}</p>
        </div>
    );
};

export default ContactString;