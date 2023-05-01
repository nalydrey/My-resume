import React from 'react';

const ContactIcon = ({address, icon, to, tooltip, pad, blank}) => {
    const Icon = icon
    return (
        <div className={`group relative cursor-pointer tablet:w-14 w-10 p-${pad}  shadow-light rounded-xl bg-gradient-to-tr from-yellow-300 to-orange-600 `}>
            <a href={`${to}:${address}`} target={`${blank} ? '_blank': ''`}><Icon className='w-full h-full'/></a>
            {tooltip &&
            <div className='text-black z-10 group-hover:scale-100 scale-0 absolute -top-2/4 duration-300 left-2/4 rounded-lg -translate-x-2/4 bg-white py-1 px-3'>
                {address}
            </div>}
        </div>
    );
};

export default ContactIcon;